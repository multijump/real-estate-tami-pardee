export const state = () => ({
  blog: null,
  blogLoading: false,

  blogCategory: null,
  blogCategoryLoading: false,

  blogSearch: null,
  blogSearchLoading: false,

  blogArticle: null,
  blogArticleLoading: false,
})

export const getters = {
  blog: state => state.blog,
  blogLoading: state => state.blogLoading,

  blogCategory: state => state.blogCategory,
  blogCategoryLoading: state => state.blogCategoryLoading,

  blogSearch: state => state.blogSearch,
  blogSearchLoading: state => state.blogSearchLoading,

  blogArticle: state => state.blogArticle,
  blogArticleLoading: state => state.blogArticleLoading,
}

export const mutations = {
  'GET_BLOG_REQUEST': (state) => {
    state.blogLoading = true
  },

  'GET_BLOG_SUCCESS': (state, payload) => {
    state.blog = payload
    state.blogLoading = false
  },

  'GET_BLOG_FAILURE': (state) => {
    state.blog = null
    state.blogLoading = false
  },

  'GET_BLOG_CATEGORY_REQUEST': (state) => {
    state.blogCategoryLoading = true
  },

  'GET_BLOG_CATEGORY_SUCCESS': (state, payload) => {
    state.blogCategory = payload
    state.blogCategoryLoading = false
  },

  'GET_BLOG_CATEGORY_FAILURE': (state) => {
    state.blogCategory = null
    state.blogCategoryLoading = false
  },

  'GET_BLOG_SEARCH_REQUEST': (state) => {
    state.blogSearchLoading = true
  },

  'GET_BLOG_SEARCH_SUCCESS': (state, payload) => {
    state.blogSearch = payload
    state.blogSearchLoading = false
  },

  'GET_BLOG_SEARCH_FAILURE': (state) => {
    state.blogSearch = null
    state.blogSearchLoading = false
  },

  'GET_BLOG_ARTICLE_REQUEST': (state) => {
    state.blogArticleLoading = true
  },

  'GET_BLOG_ARTICLE_SUCCESS': (state, payload) => {
    state.blogArticle = payload
    state.blogArticleLoading = false
  },

  'GET_BLOG_ARTICLE_FAILURE': (state) => {
    state.blogArticle = null
    state.blogArticleLoading = false
  },
}

export const actions = {
  async getBlog ({ commit }) {
    commit('GET_BLOG_REQUEST')

    try {
      const blog = await this.$axios.get('blog_content')

      commit('GET_BLOG_SUCCESS', blog.data.data)
    } catch {
      commit('GET_BLOG_FAILURE')
    }
  },

  async getBlogCategory ({ commit }, params) {
    commit('GET_BLOG_CATEGORY_REQUEST')

    try {
      const blog = await this.$axios.get(`blogs_by_category?${params}`)

      commit('GET_BLOG_CATEGORY_SUCCESS', blog.data.data)
    } catch {
      commit('GET_BLOG_CATEGORY_FAILURE')
    }
  },

  async getBlogSearch ({ commit }, params) {
    commit('GET_BLOG_SEARCH_REQUEST')

    try {
      const blog = await this.$axios.get(`blogsearch?${params}`)

      commit('GET_BLOG_SEARCH_SUCCESS', blog.data.data)
    } catch {
      commit('GET_BLOG_SEARCH_FAILURE')
    }
  },

  async getBlogArcticle ({ commit }, params) {
    commit('GET_BLOG_ARTICLE_REQUEST')

    try {
      const blog = await this.$axios.get(`singleblog?id=${params}`)

      commit('GET_BLOG_ARTICLE_SUCCESS', blog.data.data)
    } catch {
      commit('GET_BLOG_ARTICLE_FAILURE')
    }
  },
}
