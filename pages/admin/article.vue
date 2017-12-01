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
      <el-table :data="articleList" v-loading="listLoading" element-loading-text="拼命加载中......" border fit empty-text="暂无数据" style="width: 100%">
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
          limit: 10
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
        currentPage: this.articleListQuery.currentPage
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
          currentPage: this.articleListQuery.currentPage
        })
      },
      handleCurrentChange (val) {
        this.articleListQuery.currentPage = val
        this.getList({
          limit: this.articleListQuery.limit,
          currentPage: val
        })
      },
      sortId () {
        if (this.articleList === null) {
          return
        }
        if (this.value === 'desc') {
          this.articleList.sort((articleObj1, articleObj2) => {
            return articleObj2.id - articleObj1.id
          })
        }
        if (this.value === 'asc') {
          this.articleList.sort((articleObj1, articleObj2) => {
            return articleObj1.id - articleObj2.id
          })
        }
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
