import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalActive: false,
    canDelete: false,
    deleteDataId: null,
    deleteUrl: null,

    courseChangeLoading: false,
    courseChangeMessage: "",

    projectChangeLoading: false,
    projectChangeMessage: "",

    serviceChangeLoading: false,
    serviceChangeMessage: "",

    courseSkip: 0,
    courseCount: 10,

    projectSkip: 0,
    projectCount: 10,

    refetch: false,
}

const admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCanDelete(state, action){
            state.canDelete = action.payload;
        },
        setDeleteDataId(state, action){
        	state.deleteDataId = action.payload
        },
        setDeleteUrl(state, action){
            state.deleteUrl = action.payload
        },
        setModalActive(state, action){
            state.modalActive = action.payload
        },
        setCourseChangeLoading(state, action){
            state.courseChangeLoading = action.payload
        },
        setCourseChangeMessage(state, action){
            state.courseChangeMessage = action.payload
        },
        setProjectChangeLoading(state, action){
            state.projectChangeLoading = action.payload
        },
        setProjectChangeMessage(state, action){
            state.projectChangeMessage = action.payload
        },
        setServiceChangeLoading(state, action){
            state.serviceChangeLoading = action.payload
        },
        setServiceChangeMessage(state, action){
            state.serviceChangeMessage = action.payload
        },

        setCourseSkip(state, action){
            state.courseSkip = action.payload
        },
        setCourseCount(state, action){
            state.courseCount = action.payload
        },
        setProjectSkip(state, action){
            state.projectSkip = action.payload
        },
        setProjectCount(state, action){
            state.projectCount = action.payload
        },
        setRefetch(state, action){
            state.refetch = action.payload
        }
    },
})

export const {
	setCanDelete,
	setDeleteDataId,
    setDeleteUrl,
    setModalActive,

    setServiceChangeLoading,
    setServiceChangeMessage,

    setCourseSkip,
    setCourseCount,
    setCourseChangeLoading,
    setCourseChangeMessage,
    setProjectChangeLoading,
    setProjectChangeMessage,
    
    setProjectSkip,
    setProjectCount,

    setRefetch
} = admin.actions
export default admin.reducer;