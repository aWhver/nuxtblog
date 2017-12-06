<<template>
  <div>
    <SlideMenu></SlideMenu>
    <div class="main-container">
      <div class="filter-container">
        <div class="filter-item">
          <el-select v-model="value" placeholder="按ID升序排列" @change="sortId()">
            <el-option v-for="item in options" :label="item.label" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="filter-item">
          <el-button type="primary" icon="el-icon-edit">新增</el-button>
        </div>
      </div>
      <el-table :data="articleList" v-loading="listLoading" element-loading-text="小主,我需要时间......" border fit empty-text="暂无数据" style="width: 100%">
        <el-table-column type="index" align="center" label="序号">
          <template scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标题" align="center" width="120">
          <template scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="200">
          <template scope="scope">
            <span class="title">{{ scope.row.description}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="时间" width="200">
          <template scope="scope">
            <span>{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="发布者" width="80">
          <template scope="scope">
            <span>{{ scope.row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标签" align="center" width="90">
          <template scope="scope">
            <el-tag type="success">{{ scope.row.tag }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <template scope="scope">
            <el-button type="primary" size="small">修改</el-button>
            <el-button type="warning" size="small" @click="deleteArticle(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container" v-show="!listLoading">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="articleListQuery.currentPage"
          :page-sizes="[10, 15, 20, 30]"
          :page-size="articleListQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import SlideMenu from '~/components/admin/SlideMenu'
  import axios from '~/plugins/axios'
  export default {
    layout: 'login',
    data () {
      return {
        articleListQuery: {
          currentPage: 1,
          limit: 10,
          sort: 'asc'
        },
        listLoading: true,
        articleList: null,
        totalNum: 0,
        value: '按ID升序排列',
        options: [
          {
            value: 'asc',
            label: '按ID升序排列'
          },
          {
            value: 'desc',
            label: '按ID降序排列'
          }
        ]
      }
    },
    mounted () {
      this.getList({
        limit: this.articleListQuery.limit,
        currentPage: this.articleListQuery.currentPage,
        sort: this.articleListQuery.sort
      })
    },
    methods: {
      async getList (params) {
        this.listLoading = true
        let {data: result} = await axios.post('/api/admin/article', params)
        this.articleList = result.result
        this.totalNum = result.totalNum
        this.listLoading = false
      },
      handleSizeChange (val) {
        this.articleListQuery.limit = val
        this.getList({
          limit: val,
          currentPage: this.articleListQuery.currentPage,
          sort: this.articleListQuery.sort
        })
      },
      handleCurrentChange (val) {
        this.articleListQuery.currentPage = val
        this.getList({
          limit: this.articleListQuery.limit,
          currentPage: val,
          sort: this.articleListQuery.sort
        })
      },
      sortId () {
        if (this.articleList === null) {
          return
        }
        this.articleListQuery.sort = this.value
        this.articleListQuery.currentPage = 1
        this.getList({
          limit: this.articleListQuery.limit,
          currentPage: this.articleListQuery.currentPage,
          sort: this.value
        })
      },
      async deleteArticle (articleId) {
        this.listLoading = true
        let { data: { status, msg } } = await axios.post('/api/admin/article/delete', {articleId: articleId})
        let notifyMsg = ['操作失败', '操作成功'][status]
        let msgType = ['error', 'success'][status]
        if (status === 1) {
          this.getList({
            limit: this.articleListQuery.limit,
            currentPage: this.articleListQuery.currentPage,
            sort: this.articleListQuery.sort
          })
        }
        this.listLoading = false
        this.$notify({
          title: notifyMsg,
          message: msg,
          type: msgType
        })
      }
    },
    components: {
      SlideMenu
    }
  }
</script>
<style>
  .el-table td, .el-table th {
    padding: 0;
    height: 40px;
  }
  .el-table .cell span.title {
    cursor: pointer;
    color: #337ab7;
  }
  .filter-container { margin: 10px 0;}
  .filter-container .filter-item { display: inline-block; margin: 0 4px;}
  .filter-container .el-select input {
    width: 140px;
  }
</style>
