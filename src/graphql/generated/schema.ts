import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type AuthenticateUserError = FailedLoginError | ResourceNotFoundError | ValidationError;

export type AuthenticateUserInput = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type AuthenticateUserPayload = {
  __typename?: 'AuthenticateUserPayload';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<AuthenticateUserError>>;
  user?: Maybe<User>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  active: Scalars['Boolean'];
  createdOn: Scalars['DateTime'];
  end: Scalars['DateTime'];
  id: Scalars['ID'];
  messages: Array<Message>;
  name?: Maybe<Scalars['String']>;
  start: Scalars['DateTime'];
  topicId?: Maybe<Scalars['String']>;
  updatedOn?: Maybe<Scalars['DateTime']>;
};


export type ChannelMessagesArgs = {
  take?: Scalars['Int'];
};

export type ChannelFilterInput = {
  active?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<ChannelFilterInput>>;
  createdOn?: InputMaybe<DateTimeOperationFilterInput>;
  end?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  messages?: InputMaybe<ListFilterInputTypeOfMessageFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ChannelFilterInput>>;
  start?: InputMaybe<DateTimeOperationFilterInput>;
  topicId?: InputMaybe<StringOperationFilterInput>;
  updatedOn?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ChannelSortInput = {
  active?: InputMaybe<SortEnumType>;
  createdOn?: InputMaybe<SortEnumType>;
  end?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  start?: InputMaybe<SortEnumType>;
  topicId?: InputMaybe<SortEnumType>;
  updatedOn?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ChannelsConnection = {
  __typename?: 'ChannelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ChannelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Channel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ChannelsEdge = {
  __typename?: 'ChannelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Channel;
};

export type CheckNickNamePayload = {
  __typename?: 'CheckNickNamePayload';
  isDuplicate: Scalars['Boolean'];
  suggestions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateMessageError = ResourceNotFoundError | UserNotExistError | ValidationError;

export type CreateMessageInput = {
  channelId: Scalars['ID'];
  content: Scalars['String'];
};

export type CreateMessagePayload = {
  __typename?: 'CreateMessagePayload';
  errors?: Maybe<Array<CreateMessageError>>;
  messageProcessingPayload?: Maybe<MessageProcessingPayload>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type DuplicateEmailError = Error & {
  __typename?: 'DuplicateEmailError';
  message: Scalars['String'];
};

export type DuplicateNickNameError = Error & {
  __typename?: 'DuplicateNickNameError';
  message: Scalars['String'];
};

export type Error = {
  message: Scalars['String'];
};

export type FailedLoginError = Error & {
  __typename?: 'FailedLoginError';
  message: Scalars['String'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type JoinAsMemberError = DuplicateEmailError | FailedLoginError | ResourceNotFoundError | UserNotExistError | ValidationError;

export type JoinAsMemberInput = {
  email: Scalars['String'];
};

export type JoinAsMemberPayload = {
  __typename?: 'JoinAsMemberPayload';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<JoinAsMemberError>>;
  user?: Maybe<User>;
};

export type JoinChannelError = ResourceNotFoundError | ValidationError;

export type JoinChannelInput = {
  topicId: Scalars['String'];
};

export type JoinChannelPayload = {
  __typename?: 'JoinChannelPayload';
  channel?: Maybe<Channel>;
  errors?: Maybe<Array<JoinChannelError>>;
};

export type JoinUserError = DuplicateNickNameError | ValidationError;

export type JoinUserInput = {
  nickName: Scalars['String'];
};

export type JoinUserPayload = {
  __typename?: 'JoinUserPayload';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<JoinUserError>>;
  user?: Maybe<User>;
};

export type KeyValuePairOfStringAndObject = {
  __typename?: 'KeyValuePairOfStringAndObject';
  key: Scalars['String'];
};

export type LikeMessageError = ResourceNotFoundError | UserNotExistError | ValidationError;

export type LikeMessageInput = {
  channelId: Scalars['ID'];
  messageId: Scalars['ID'];
};

export type LikeMessagePayload = {
  __typename?: 'LikeMessagePayload';
  errors?: Maybe<Array<LikeMessageError>>;
  messageProcessingPayload?: Maybe<MessageProcessingPayload>;
};

export type ListFilterInputTypeOfMessageFilterInput = {
  all?: InputMaybe<MessageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<MessageFilterInput>;
  some?: InputMaybe<MessageFilterInput>;
};

export type ListFilterInputTypeOfMessageLikeFilterInput = {
  all?: InputMaybe<MessageLikeFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<MessageLikeFilterInput>;
  some?: InputMaybe<MessageLikeFilterInput>;
};

export type Message = Node & {
  __typename?: 'Message';
  avatarUrl: Scalars['String'];
  channel?: Maybe<Channel>;
  channelId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCurrentUser: Scalars['Boolean'];
  liked: Scalars['Boolean'];
  likes: Scalars['Int'];
  messageLikes?: Maybe<Array<Maybe<MessageLike>>>;
  timestamp: Scalars['DateTime'];
  timestampAgo: Scalars['String'];
  user?: Maybe<User>;
};


export type MessageAvatarUrlArgs = {
  targetSize?: Scalars['Int'];
};

export enum MessageAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Like = 'LIKE',
  Update = 'UPDATE'
}

export type MessageFilterInput = {
  and?: InputMaybe<Array<MessageFilterInput>>;
  channel?: InputMaybe<ChannelFilterInput>;
  channelId?: InputMaybe<IntOperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  displayName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  likes?: InputMaybe<IntOperationFilterInput>;
  messageLikes?: InputMaybe<ListFilterInputTypeOfMessageLikeFilterInput>;
  or?: InputMaybe<Array<MessageFilterInput>>;
  timestamp?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type MessageLike = {
  __typename?: 'MessageLike';
  createdOn: Scalars['DateTime'];
  id: Scalars['Int'];
  message?: Maybe<Message>;
  messageId: Scalars['Int'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type MessageLikeFilterInput = {
  and?: InputMaybe<Array<MessageLikeFilterInput>>;
  createdOn?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  message?: InputMaybe<MessageFilterInput>;
  messageId?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<MessageLikeFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type MessageProcessingPayload = {
  __typename?: 'MessageProcessingPayload';
  action: MessageAction;
  message?: Maybe<Message>;
};

export type MessageSortInput = {
  channel?: InputMaybe<ChannelSortInput>;
  channelId?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  displayName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  likes?: InputMaybe<SortEnumType>;
  timestamp?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type MessagesConnection = {
  __typename?: 'MessagesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MessagesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Message>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MessagesEdge = {
  __typename?: 'MessagesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Message;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUser: AuthenticateUserPayload;
  createMessage: CreateMessagePayload;
  joinAsMember: JoinAsMemberPayload;
  joinChannel: JoinChannelPayload;
  joinUser: JoinUserPayload;
  likeMessage: LikeMessagePayload;
  signInUser: SignInUserPayload;
  signUpUser: SignUpUserPayload;
  updateUser: UpdateUserPayload;
  uploadAvatar: UploadAvatarPayload;
};


export type MutationAuthenticateUserArgs = {
  input: AuthenticateUserInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationJoinAsMemberArgs = {
  input: JoinAsMemberInput;
};


export type MutationJoinChannelArgs = {
  input: JoinChannelInput;
};


export type MutationJoinUserArgs = {
  input: JoinUserInput;
};


export type MutationLikeMessageArgs = {
  input: LikeMessageInput;
};


export type MutationSignInUserArgs = {
  input: SignInUserInput;
};


export type MutationSignUpUserArgs = {
  input: SignUpUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadAvatarArgs = {
  input: UploadAvatarInput;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  channelById: Channel;
  channels?: Maybe<ChannelsConnection>;
  checkNickName: CheckNickNamePayload;
  messageById: Message;
  messages?: Maybe<MessagesConnection>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  profile: User;
  topicById: Topic;
  topics: Array<Topic>;
  userById: User;
  users?: Maybe<UsersConnection>;
};


export type QueryChannelByIdArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ChannelSortInput>>;
  where?: InputMaybe<ChannelFilterInput>;
};


export type QueryCheckNickNameArgs = {
  nickName: Scalars['String'];
};


export type QueryMessageByIdArgs = {
  id: Scalars['ID'];
};


export type QueryMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channelId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<MessageSortInput>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryTopicByIdArgs = {
  id: Scalars['String'];
};


export type QueryTopicsArgs = {
  afterMinutes?: Scalars['Int'];
  beforeMinutes?: Scalars['Int'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<UserSortInput>>;
  where?: InputMaybe<UserFilterInput>;
};

export type ResourceNotFoundError = Error & {
  __typename?: 'ResourceNotFoundError';
  message: Scalars['String'];
};

export enum Severity {
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING'
}

export type SignInUserError = ResourceNotFoundError | ValidationError;

export type SignInUserInput = {
  email: Scalars['String'];
};

export type SignInUserPayload = {
  __typename?: 'SignInUserPayload';
  email?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<SignInUserError>>;
};

export type SignUpUserError = DuplicateEmailError | DuplicateNickNameError | ValidationError;

export type SignUpUserInput = {
  email: Scalars['String'];
  nickName: Scalars['String'];
};

export type SignUpUserPayload = {
  __typename?: 'SignUpUserPayload';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<SignUpUserError>>;
  user?: Maybe<User>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageProcessing: MessageProcessingPayload;
  onTopicProcessing: TopicsPayload;
};


export type SubscriptionOnMessageProcessingArgs = {
  channelId: Scalars['ID'];
};

export type Topic = {
  __typename?: 'Topic';
  active: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  progress: TopicProgress;
  start: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
};

export enum TopicProgress {
  After = 'AFTER',
  Before = 'BEFORE',
  During = 'DURING'
}

export type TopicsPayload = {
  __typename?: 'TopicsPayload';
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type UpdateUserError = ResourceNotFoundError | UserNotExistError | ValidationError;

export type UpdateUserInput = {
  nickName: Scalars['String'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  errors?: Maybe<Array<UpdateUserError>>;
  user?: Maybe<User>;
};

export type UploadAvatarError = ResourceNotFoundError | UserNotExistError | ValidationError;

export type UploadAvatarInput = {
  file: Scalars['Upload'];
};

export type UploadAvatarPayload = {
  __typename?: 'UploadAvatarPayload';
  errors?: Maybe<Array<UploadAvatarError>>;
  user?: Maybe<User>;
};

export type User = Node & {
  __typename?: 'User';
  avatarPictureId: Scalars['Int'];
  avatarUrl: Scalars['String'];
  createdOn: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  nickName?: Maybe<Scalars['String']>;
  role: UserRole;
  updatedOn?: Maybe<Scalars['DateTime']>;
};


export type UserAvatarUrlArgs = {
  targetSize?: Scalars['Int'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  avatarPictureId?: InputMaybe<IntOperationFilterInput>;
  createdOn?: InputMaybe<DateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  nickName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  role?: InputMaybe<UserRoleOperationFilterInput>;
  updatedOn?: InputMaybe<DateTimeOperationFilterInput>;
};

export type UserNotExistError = Error & {
  __typename?: 'UserNotExistError';
  message: Scalars['String'];
};

export enum UserRole {
  Administrator = 'ADMINISTRATOR',
  Guest = 'GUEST',
  Member = 'MEMBER',
  Moderator = 'MODERATOR'
}

export type UserRoleOperationFilterInput = {
  eq?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  neq?: InputMaybe<UserRole>;
  nin?: InputMaybe<Array<UserRole>>;
};

export type UserSortInput = {
  avatarPictureId?: InputMaybe<SortEnumType>;
  createdOn?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  nickName?: InputMaybe<SortEnumType>;
  role?: InputMaybe<SortEnumType>;
  updatedOn?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UsersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

export type ValidationError = Error & {
  __typename?: 'ValidationError';
  errors?: Maybe<Array<Maybe<ValidationFailure>>>;
  message: Scalars['String'];
};

export type ValidationFailure = {
  __typename?: 'ValidationFailure';
  errorCode?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  formattedMessagePlaceholderValues?: Maybe<Array<KeyValuePairOfStringAndObject>>;
  propertyName?: Maybe<Scalars['String']>;
  severity: Severity;
};

export type AuthenticateUserMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
}>;


export type AuthenticateUserMutation = { __typename?: 'Mutation', authenticateUser: { __typename?: 'AuthenticateUserPayload', accessToken?: string | null, user?: { __typename?: 'User', id: string, email?: string | null, nickName?: string | null, role: UserRole, avatarUrl: string } | null, errors?: Array<{ __typename?: 'FailedLoginError', message: string, code: 'FailedLoginError' } | { __typename?: 'ResourceNotFoundError', message: string, code: 'ResourceNotFoundError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type CheckNickNameQueryVariables = Exact<{
  nickName: Scalars['String'];
}>;


export type CheckNickNameQuery = { __typename?: 'Query', checkNickName: { __typename?: 'CheckNickNamePayload', isDuplicate: boolean, suggestions?: Array<string | null> | null } };

export type CreateMessageMutationVariables = Exact<{
  channelId: Scalars['ID'];
  content: Scalars['String'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'CreateMessagePayload', messageProcessingPayload?: { __typename?: 'MessageProcessingPayload', action: MessageAction, message?: { __typename?: 'Message', id: string } | null } | null, errors?: Array<{ __typename?: 'ResourceNotFoundError', message: string, code: 'ResourceNotFoundError' } | { __typename?: 'UserNotExistError', message: string, code: 'UserNotExistError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type UserFragment = { __typename?: 'User', id: string, email?: string | null, nickName?: string | null, role: UserRole, avatarUrl: string };

export type ChannelFragment = { __typename?: 'Channel', id: string, name?: string | null, createdOn: any, active: boolean, messages: Array<{ __typename?: 'Message', id: string, content?: string | null, displayName?: string | null, isCurrentUser: boolean, timestamp: any, timestampAgo: string, likes: number, liked: boolean, avatarUrl: string }> };

export type MessageFragment = { __typename?: 'Message', id: string, content?: string | null, displayName?: string | null, isCurrentUser: boolean, timestamp: any, timestampAgo: string, likes: number, liked: boolean, avatarUrl: string };

export type TopicFragment = { __typename?: 'Topic', id?: string | null, title?: string | null, description?: string | null, start: any, end: any, active: boolean, progress: TopicProgress };

export type GetChannelByIdQueryVariables = Exact<{
  channelId: Scalars['ID'];
}>;


export type GetChannelByIdQuery = { __typename?: 'Query', channelById: { __typename?: 'Channel', id: string, name?: string | null, createdOn: any, messages: Array<{ __typename?: 'Message', id: string, content?: string | null, displayName?: string | null, isCurrentUser: boolean, timestamp: any, timestampAgo: string, likes: number, liked: boolean, avatarUrl: string }> } };

export type GetMessagesQueryVariables = Exact<{
  channelId: Scalars['ID'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', messages?: { __typename?: 'MessagesConnection', nodes?: Array<{ __typename?: 'Message', id: string, content?: string | null, displayName?: string | null, isCurrentUser: boolean, timestamp: any, timestampAgo: string, likes: number, liked: boolean, avatarUrl: string }> | null } | null };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', profile: { __typename?: 'User', id: string, email?: string | null, nickName?: string | null, role: UserRole, avatarUrl: string } };

export type GetTopicsQueryVariables = Exact<{
  afterMinutes?: InputMaybe<Scalars['Int']>;
}>;


export type GetTopicsQuery = { __typename?: 'Query', topics: Array<{ __typename?: 'Topic', id?: string | null, title?: string | null, description?: string | null, start: any, end: any, active: boolean, progress: TopicProgress }> };

export type JoinAsMemberMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type JoinAsMemberMutation = { __typename?: 'Mutation', joinAsMember: { __typename?: 'JoinAsMemberPayload', accessToken?: string | null, user?: { __typename?: 'User', id: string, email?: string | null, nickName?: string | null, role: UserRole, avatarUrl: string } | null, errors?: Array<{ __typename?: 'DuplicateEmailError', message: string, code: 'DuplicateEmailError' } | { __typename?: 'FailedLoginError', message: string, code: 'FailedLoginError' } | { __typename?: 'ResourceNotFoundError', message: string, code: 'ResourceNotFoundError' } | { __typename?: 'UserNotExistError', message: string, code: 'UserNotExistError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type JoinChannelMutationVariables = Exact<{
  topicId: Scalars['String'];
}>;


export type JoinChannelMutation = { __typename?: 'Mutation', joinChannel: { __typename?: 'JoinChannelPayload', channel?: { __typename?: 'Channel', id: string } | null, errors?: Array<{ __typename?: 'ResourceNotFoundError', message: string, code: 'ResourceNotFoundError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type JoinUserMutationVariables = Exact<{
  nickName: Scalars['String'];
}>;


export type JoinUserMutation = { __typename?: 'Mutation', joinUser: { __typename?: 'JoinUserPayload', accessToken?: string | null, user?: { __typename?: 'User', id: string, email?: string | null, nickName?: string | null, role: UserRole, avatarUrl: string } | null, errors?: Array<{ __typename?: 'DuplicateNickNameError', message: string, code: 'DuplicateNickNameError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type LikeMessageMutationVariables = Exact<{
  channelId: Scalars['ID'];
  messageId: Scalars['ID'];
}>;


export type LikeMessageMutation = { __typename?: 'Mutation', likeMessage: { __typename?: 'LikeMessagePayload', messageProcessingPayload?: { __typename?: 'MessageProcessingPayload', action: MessageAction, message?: { __typename?: 'Message', id: string, likes: number } | null } | null, errors?: Array<{ __typename?: 'ResourceNotFoundError', message: string, code: 'ResourceNotFoundError' } | { __typename?: 'UserNotExistError', message: string, code: 'UserNotExistError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type OnMessageProcessingSubscriptionVariables = Exact<{
  channelId: Scalars['ID'];
}>;


export type OnMessageProcessingSubscription = { __typename?: 'Subscription', onMessageProcessing: { __typename?: 'MessageProcessingPayload', action: MessageAction, message?: { __typename?: 'Message', id: string, content?: string | null, displayName?: string | null, isCurrentUser: boolean, timestamp: any, timestampAgo: string, likes: number, liked: boolean, avatarUrl: string } | null } };

export type OnTopicProcessingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnTopicProcessingSubscription = { __typename?: 'Subscription', onTopicProcessing: { __typename?: 'TopicsPayload', topics?: Array<{ __typename?: 'Topic', id?: string | null, title?: string | null, description?: string | null, start: any, end: any, active: boolean, progress: TopicProgress } | null> | null } };

export type SignInUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'SignInUserPayload', email?: string | null, errors?: Array<{ __typename?: 'ResourceNotFoundError', message: string, code: 'ResourceNotFoundError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export type SignUpUserMutationVariables = Exact<{
  nickName: Scalars['String'];
  email: Scalars['String'];
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'SignUpUserPayload', accessToken?: string | null, user?: { __typename?: 'User', id: string, email?: string | null, nickName?: string | null, role: UserRole, avatarUrl: string } | null, errors?: Array<{ __typename?: 'DuplicateEmailError', message: string, code: 'DuplicateEmailError' } | { __typename?: 'DuplicateNickNameError', message: string, code: 'DuplicateNickNameError' } | { __typename?: 'ValidationError', message: string, code: 'ValidationError', errors?: Array<{ __typename?: 'ValidationFailure', propertyName?: string | null, errorMessage?: string | null } | null> | null }> | null } };

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  nickName
  role
  avatarUrl
}
    `;
export const MessageFragmentDoc = gql`
    fragment Message on Message {
  id
  content
  displayName
  isCurrentUser
  timestamp
  timestampAgo
  likes
  liked
  avatarUrl(targetSize: 100)
}
    `;
export const ChannelFragmentDoc = gql`
    fragment Channel on Channel {
  id
  name
  createdOn
  active
  messages(take: 50) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export const TopicFragmentDoc = gql`
    fragment Topic on Topic {
  id
  title
  description
  start
  end
  active
  progress
}
    `;
export const AuthenticateUserDocument = gql`
    mutation AuthenticateUser($email: String!, $code: String!) {
  authenticateUser(input: {email: $email, code: $code}) {
    user {
      ...User
    }
    accessToken
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on FailedLoginError {
        message
      }
      ... on ResourceNotFoundError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    ${UserFragmentDoc}`;
export type AuthenticateUserMutationFn = Apollo.MutationFunction<AuthenticateUserMutation, AuthenticateUserMutationVariables>;

/**
 * __useAuthenticateUserMutation__
 *
 * To run a mutation, you first call `useAuthenticateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateUserMutation, { data, loading, error }] = useAuthenticateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useAuthenticateUserMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthenticateUserMutation, AuthenticateUserMutationVariables>(AuthenticateUserDocument, options);
      }
export type AuthenticateUserMutationHookResult = ReturnType<typeof useAuthenticateUserMutation>;
export type AuthenticateUserMutationResult = Apollo.MutationResult<AuthenticateUserMutation>;
export type AuthenticateUserMutationOptions = Apollo.BaseMutationOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>;
export const CheckNickNameDocument = gql`
    query CheckNickName($nickName: String!) {
  checkNickName(nickName: $nickName) {
    isDuplicate
    suggestions
  }
}
    `;

/**
 * __useCheckNickNameQuery__
 *
 * To run a query within a React component, call `useCheckNickNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckNickNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckNickNameQuery({
 *   variables: {
 *      nickName: // value for 'nickName'
 *   },
 * });
 */
export function useCheckNickNameQuery(baseOptions: Apollo.QueryHookOptions<CheckNickNameQuery, CheckNickNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckNickNameQuery, CheckNickNameQueryVariables>(CheckNickNameDocument, options);
      }
export function useCheckNickNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckNickNameQuery, CheckNickNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckNickNameQuery, CheckNickNameQueryVariables>(CheckNickNameDocument, options);
        }
export type CheckNickNameQueryHookResult = ReturnType<typeof useCheckNickNameQuery>;
export type CheckNickNameLazyQueryHookResult = ReturnType<typeof useCheckNickNameLazyQuery>;
export type CheckNickNameQueryResult = Apollo.QueryResult<CheckNickNameQuery, CheckNickNameQueryVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($channelId: ID!, $content: String!) {
  createMessage(input: {channelId: $channelId, content: $content}) {
    messageProcessingPayload {
      action
      message {
        id
      }
    }
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on ResourceNotFoundError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const GetChannelByIdDocument = gql`
    query GetChannelById($channelId: ID!) {
  channelById(id: $channelId) {
    id
    name
    createdOn
    messages {
      ...Message
    }
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useGetChannelByIdQuery__
 *
 * To run a query within a React component, call `useGetChannelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelByIdQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useGetChannelByIdQuery(baseOptions: Apollo.QueryHookOptions<GetChannelByIdQuery, GetChannelByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelByIdQuery, GetChannelByIdQueryVariables>(GetChannelByIdDocument, options);
      }
export function useGetChannelByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelByIdQuery, GetChannelByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelByIdQuery, GetChannelByIdQueryVariables>(GetChannelByIdDocument, options);
        }
export type GetChannelByIdQueryHookResult = ReturnType<typeof useGetChannelByIdQuery>;
export type GetChannelByIdLazyQueryHookResult = ReturnType<typeof useGetChannelByIdLazyQuery>;
export type GetChannelByIdQueryResult = Apollo.QueryResult<GetChannelByIdQuery, GetChannelByIdQueryVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($channelId: ID!) {
  messages(channelId: $channelId) {
    nodes {
      ...Message
    }
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile {
  profile {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetTopicsDocument = gql`
    query GetTopics($afterMinutes: Int) {
  topics(afterMinutes: $afterMinutes) {
    ...Topic
  }
}
    ${TopicFragmentDoc}`;

/**
 * __useGetTopicsQuery__
 *
 * To run a query within a React component, call `useGetTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicsQuery({
 *   variables: {
 *      afterMinutes: // value for 'afterMinutes'
 *   },
 * });
 */
export function useGetTopicsQuery(baseOptions?: Apollo.QueryHookOptions<GetTopicsQuery, GetTopicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopicsQuery, GetTopicsQueryVariables>(GetTopicsDocument, options);
      }
export function useGetTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopicsQuery, GetTopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopicsQuery, GetTopicsQueryVariables>(GetTopicsDocument, options);
        }
export type GetTopicsQueryHookResult = ReturnType<typeof useGetTopicsQuery>;
export type GetTopicsLazyQueryHookResult = ReturnType<typeof useGetTopicsLazyQuery>;
export type GetTopicsQueryResult = Apollo.QueryResult<GetTopicsQuery, GetTopicsQueryVariables>;
export const JoinAsMemberDocument = gql`
    mutation JoinAsMember($email: String!) {
  joinAsMember(input: {email: $email}) {
    user {
      ...User
    }
    accessToken
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on DuplicateEmailError {
        message
      }
      ... on FailedLoginError {
        message
      }
      ... on ResourceNotFoundError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    ${UserFragmentDoc}`;
export type JoinAsMemberMutationFn = Apollo.MutationFunction<JoinAsMemberMutation, JoinAsMemberMutationVariables>;

/**
 * __useJoinAsMemberMutation__
 *
 * To run a mutation, you first call `useJoinAsMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinAsMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinAsMemberMutation, { data, loading, error }] = useJoinAsMemberMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useJoinAsMemberMutation(baseOptions?: Apollo.MutationHookOptions<JoinAsMemberMutation, JoinAsMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinAsMemberMutation, JoinAsMemberMutationVariables>(JoinAsMemberDocument, options);
      }
export type JoinAsMemberMutationHookResult = ReturnType<typeof useJoinAsMemberMutation>;
export type JoinAsMemberMutationResult = Apollo.MutationResult<JoinAsMemberMutation>;
export type JoinAsMemberMutationOptions = Apollo.BaseMutationOptions<JoinAsMemberMutation, JoinAsMemberMutationVariables>;
export const JoinChannelDocument = gql`
    mutation JoinChannel($topicId: String!) {
  joinChannel(input: {topicId: $topicId}) {
    channel {
      id
    }
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on ResourceNotFoundError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    `;
export type JoinChannelMutationFn = Apollo.MutationFunction<JoinChannelMutation, JoinChannelMutationVariables>;

/**
 * __useJoinChannelMutation__
 *
 * To run a mutation, you first call `useJoinChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinChannelMutation, { data, loading, error }] = useJoinChannelMutation({
 *   variables: {
 *      topicId: // value for 'topicId'
 *   },
 * });
 */
export function useJoinChannelMutation(baseOptions?: Apollo.MutationHookOptions<JoinChannelMutation, JoinChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinChannelMutation, JoinChannelMutationVariables>(JoinChannelDocument, options);
      }
export type JoinChannelMutationHookResult = ReturnType<typeof useJoinChannelMutation>;
export type JoinChannelMutationResult = Apollo.MutationResult<JoinChannelMutation>;
export type JoinChannelMutationOptions = Apollo.BaseMutationOptions<JoinChannelMutation, JoinChannelMutationVariables>;
export const JoinUserDocument = gql`
    mutation JoinUser($nickName: String!) {
  joinUser(input: {nickName: $nickName}) {
    user {
      ...User
    }
    accessToken
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on DuplicateNickNameError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    ${UserFragmentDoc}`;
export type JoinUserMutationFn = Apollo.MutationFunction<JoinUserMutation, JoinUserMutationVariables>;

/**
 * __useJoinUserMutation__
 *
 * To run a mutation, you first call `useJoinUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinUserMutation, { data, loading, error }] = useJoinUserMutation({
 *   variables: {
 *      nickName: // value for 'nickName'
 *   },
 * });
 */
export function useJoinUserMutation(baseOptions?: Apollo.MutationHookOptions<JoinUserMutation, JoinUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinUserMutation, JoinUserMutationVariables>(JoinUserDocument, options);
      }
export type JoinUserMutationHookResult = ReturnType<typeof useJoinUserMutation>;
export type JoinUserMutationResult = Apollo.MutationResult<JoinUserMutation>;
export type JoinUserMutationOptions = Apollo.BaseMutationOptions<JoinUserMutation, JoinUserMutationVariables>;
export const LikeMessageDocument = gql`
    mutation LikeMessage($channelId: ID!, $messageId: ID!) {
  likeMessage(input: {channelId: $channelId, messageId: $messageId}) {
    messageProcessingPayload {
      action
      message {
        id
        likes
      }
    }
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on ResourceNotFoundError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    `;
export type LikeMessageMutationFn = Apollo.MutationFunction<LikeMessageMutation, LikeMessageMutationVariables>;

/**
 * __useLikeMessageMutation__
 *
 * To run a mutation, you first call `useLikeMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMessageMutation, { data, loading, error }] = useLikeMessageMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useLikeMessageMutation(baseOptions?: Apollo.MutationHookOptions<LikeMessageMutation, LikeMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMessageMutation, LikeMessageMutationVariables>(LikeMessageDocument, options);
      }
export type LikeMessageMutationHookResult = ReturnType<typeof useLikeMessageMutation>;
export type LikeMessageMutationResult = Apollo.MutationResult<LikeMessageMutation>;
export type LikeMessageMutationOptions = Apollo.BaseMutationOptions<LikeMessageMutation, LikeMessageMutationVariables>;
export const OnMessageProcessingDocument = gql`
    subscription OnMessageProcessing($channelId: ID!) {
  onMessageProcessing(channelId: $channelId) {
    action
    message {
      ...Message
    }
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useOnMessageProcessingSubscription__
 *
 * To run a query within a React component, call `useOnMessageProcessingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnMessageProcessingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMessageProcessingSubscription({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useOnMessageProcessingSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnMessageProcessingSubscription, OnMessageProcessingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnMessageProcessingSubscription, OnMessageProcessingSubscriptionVariables>(OnMessageProcessingDocument, options);
      }
export type OnMessageProcessingSubscriptionHookResult = ReturnType<typeof useOnMessageProcessingSubscription>;
export type OnMessageProcessingSubscriptionResult = Apollo.SubscriptionResult<OnMessageProcessingSubscription>;
export const OnTopicProcessingDocument = gql`
    subscription OnTopicProcessing {
  onTopicProcessing {
    topics {
      ...Topic
    }
  }
}
    ${TopicFragmentDoc}`;

/**
 * __useOnTopicProcessingSubscription__
 *
 * To run a query within a React component, call `useOnTopicProcessingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnTopicProcessingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnTopicProcessingSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnTopicProcessingSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnTopicProcessingSubscription, OnTopicProcessingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnTopicProcessingSubscription, OnTopicProcessingSubscriptionVariables>(OnTopicProcessingDocument, options);
      }
export type OnTopicProcessingSubscriptionHookResult = ReturnType<typeof useOnTopicProcessingSubscription>;
export type OnTopicProcessingSubscriptionResult = Apollo.SubscriptionResult<OnTopicProcessingSubscription>;
export const SignInUserDocument = gql`
    mutation SignInUser($email: String!) {
  signInUser(input: {email: $email}) {
    email
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on ResourceNotFoundError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($nickName: String!, $email: String!) {
  signUpUser(input: {nickName: $nickName, email: $email}) {
    user {
      ...User
    }
    accessToken
    errors {
      code: __typename
      ... on Error {
        message
      }
      ... on DuplicateEmailError {
        message
      }
      ... on DuplicateNickNameError {
        message
      }
      ... on ValidationError {
        message
        errors {
          propertyName
          errorMessage
        }
      }
    }
  }
}
    ${UserFragmentDoc}`;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      nickName: // value for 'nickName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;