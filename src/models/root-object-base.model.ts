import { IsNotEmpty } from 'class-validator';
export class RootBaseObjectModel {
  @IsNotEmpty()
  object_kind: string;
  event_name?: string;
  user_name?: string;
  user_avatar?: string;
  email?: string;
  user?: UserModel;
  project: ProjectModel;
  repository?: RepositoryModel;
}

export class UserModel {
  user_name?: string;
  user_avatar?: string;
  email?: string;
}

export class ProjectModel {
  @IsNotEmpty()
  name: string;
  description: string;
  url: string;
  http_url: string;
}

export class RepositoryModel {
  name?: string;
  url?: string;
  description?: string;
}

export class ObjectAttributeModel {
  id: number;
  created_at: string;
  status: string;
  detailed_status: string;
}

export class BuildModel {
  id: number;
  name: string;
  stage: string;
  status: string;
}
