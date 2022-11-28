import {
  BuildModel,
  ObjectAttributeModel,
  RootBaseObjectModel,
} from './root-object-base.model';

export class GitlabPipelineModel extends RootBaseObjectModel {
  builds?: BuildModel[];
  object_attributes?: ObjectAttributeModel;
}
