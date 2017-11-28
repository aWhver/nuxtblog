<<template>
  <div>
    <SlideMenu></SlideMenu>
    <div class="main-container">
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
        :page-sizes="[10,15,20,30]"
        :page-size="articleListQuery.limit"
        :currentPage.sync="articleListQuery.currentPage"
        layout="total, sizes, prev, pager, next, jumper">
        :total="4"
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
        listLoading: false,
        articleList: null
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
        console.log(JSON.stringify(result.result))
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
</style>
