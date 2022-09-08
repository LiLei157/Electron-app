import Mock from 'mockjs';
import {getVisualClassification,getVideoListById} from './data'

Mock.mock(/\/api\/get_visual_classification/,'get',getVisualClassification)
Mock.mock(/\/api\/get_video_list/,'get',getVideoListById)