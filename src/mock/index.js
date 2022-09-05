import Mock from 'mockjs';
import {getVisualClassification} from './data'

Mock.mock('/api/get_visual_classification','get',getVisualClassification)