import { configureStore } from "@reduxjs/toolkit";
import { createClientSlice } from "./slices/clients/CreateClient";
import { updateClientSlice } from "./slices/clients/UpdateClient";
import { getClientSlice } from "./slices/clients/GetClient";
import { deleteClientSlice } from "./slices/clients/DeleteClient";
import { updateCategorySlice } from "./slices/category/UpdateCategory";
import { getCategorySlice } from "./slices/category/GetCategory";
import { deleteCategorySlice } from "./slices/category/DeleteCategory";
import { getProjectSlice } from "./slices/projects/GetProject";
import { createProjectSlice } from "./slices/projects/CreateProject";
import { deleteProjectSlice } from "./slices/projects/DeleteProject";
import { updateProjectSlice } from "./slices/projects/UpdateProject";
import { getTeamSlice } from "./slices/teams/GetTeam";
import { createTeamSlice } from "./slices/teams/CreateTeam";
import { updateTeamSlice } from "./slices/teams/UpdateTeam";
import { deleteTeamSlice } from "./slices/teams/DeleteTeam";
import { createCategorySlice } from "./slices/category/CreateCategory";
import { createUserSlice } from "./slices/users/createUser";
import { updateUserSlice } from "./slices/users/updateUser";
import { deleteUserSlice } from "./slices/users/deleteUser";
import { getoneProjectSlice } from "./slices/projects/GetOneProject";
import { createBlogSlice } from "./slices/blog/CreateBlog";
import { getBlogSlice } from "./slices/blog/GetBlog";
import { getOneBlogSlice } from "./slices/blog/GetOneBlog";
import { updateBlogSlice } from "./slices/blog/UpdateBlog";
import { deleteBlogSlice } from "./slices/blog/DeleteBlog";
import { createLogoSlice } from "./slices/logo/CreateLogo";
import { getLogoSlice } from "./slices/logo/GetLogo";
import { getOneLogoSlice } from "./slices/logo/GetOneLogo";
import { updateLogoSlice } from "./slices/logo/UpdateLogo";
import { deleteLogoSlice } from "./slices/logo/DeleteLogo";
import { updateOrderTeam } from "./slices/teams/Team-Order";
import { updateOrderProject } from "./slices/projects/Project-Order";
import { singInSlice } from "./slices/auth/SingIn";
import { singUpSlice } from "./slices/auth/SingUp";
import userInfoSlice from "./slices/auth/UserInfo";
import { getUserSlice } from "./slices/users/getUser";

export const store = configureStore({
  reducer: {
    // Auth
    singin: singInSlice.reducer,
    singup: singUpSlice.reducer,

    // UserInfo
    userInfo: userInfoSlice.reducer,

    // Clients
    createClient: createClientSlice.reducer,
    updateClient: updateClientSlice.reducer,
    getClient: getClientSlice.reducer,
    deleteClient: deleteClientSlice.reducer,

    // Users
    createUser: createUserSlice.reducer,
    updateUser: updateUserSlice.reducer,
    deleteUser: deleteUserSlice.reducer,
    getUser: getUserSlice.reducer,

    // Teams
    createTeam: createTeamSlice.reducer,
    updateTeam: updateTeamSlice.reducer,
    deleteTeam: deleteTeamSlice.reducer,
    getTeam: getTeamSlice.reducer,
    // Project
    createProject: createProjectSlice.reducer,
    updateProject: updateProjectSlice.reducer,
    getProject: getProjectSlice.reducer,
    deleteProject: deleteProjectSlice.reducer,

    // categories
    getCategory: getCategorySlice.reducer,
    createCategory: createCategorySlice.reducer,
    updateCategory: updateCategorySlice.reducer,
    deleteCategory: deleteCategorySlice.reducer,

    //project

    getoneproject: getoneProjectSlice.reducer,
    orderProject: updateOrderProject.reducer,

    //team

    orderTeam: updateOrderTeam.reducer,

    //Blog

    createBlog: createBlogSlice.reducer,
    getAllBlogs: getBlogSlice.reducer,
    getOneBlog: getOneBlogSlice.reducer,
    updateBlog: updateBlogSlice.reducer,
    deleteBlog: deleteBlogSlice.reducer,

    //Logos
    createLogo: createLogoSlice.reducer,
    getAllLogos: getLogoSlice.reducer,
    getOneLogo: getOneLogoSlice.reducer,
    updateLogo: updateLogoSlice.reducer,
    deleteLogo: deleteLogoSlice.reducer,
  },
  // devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
