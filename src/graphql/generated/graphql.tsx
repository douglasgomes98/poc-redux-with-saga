import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
};

export type Agency = {
  __typename?: 'Agency';
  activities?: Maybe<Array<AgencyActivity>>;
  booking_contact_type?: Maybe<BookingContactType>;
  commission_module?: Maybe<Scalars['String']>;
  consolid_fee_module?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crm_company_id?: Maybe<Scalars['String']>;
  default_business_fee?: Maybe<Scalars['Float']>;
  default_economy_fee?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  last_activity?: Maybe<Scalars['String']>;
  logo?: Maybe<LogoItem>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

export type AgencyActivity = {
  __typename?: 'AgencyActivity';
  activity_type?: Maybe<AgencyActivityType>;
  agency_id?: Maybe<Scalars['Int']>;
  agency_info?: Maybe<AgencyItem>;
  created_at?: Maybe<Scalars['String']>;
  err?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  transaction: Scalars['String'];
  user_agency_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_info?: Maybe<UserItem>;
};

/** The agency activity Type UNSPECIFIED|CREATED|EDITED|DELETED|ENABLED|DISABLED|CONSOLID_FEE_MODULE_EDITED|COMMISSION_MODULE_EDITED */
export enum AgencyActivityType {
  AgencyActivityTypeCommissionModuleEdited = 'AGENCY_ACTIVITY_TYPE_COMMISSION_MODULE_EDITED',
  AgencyActivityTypeConsolidFeeModuleEdited = 'AGENCY_ACTIVITY_TYPE_CONSOLID_FEE_MODULE_EDITED',
  AgencyActivityTypeCreated = 'AGENCY_ACTIVITY_TYPE_CREATED',
  AgencyActivityTypeDeleted = 'AGENCY_ACTIVITY_TYPE_DELETED',
  AgencyActivityTypeDisabled = 'AGENCY_ACTIVITY_TYPE_DISABLED',
  AgencyActivityTypeEdited = 'AGENCY_ACTIVITY_TYPE_EDITED',
  AgencyActivityTypeEnabled = 'AGENCY_ACTIVITY_TYPE_ENABLED',
  AgencyActivityTypeUnspecified = 'AGENCY_ACTIVITY_TYPE_UNSPECIFIED'
}

export type AgencyAirlineCommissionModule = {
  __typename?: 'AgencyAirlineCommissionModule';
  airline_code?: Maybe<Scalars['String']>;
  consolid_commission?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['String']>;
  from_commission?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  to_commission?: Maybe<Scalars['Float']>;
};

export type AgencyAirlineCommissionModuleInput = {
  airline_code?: InputMaybe<Scalars['String']>;
  consolid_commission?: InputMaybe<Scalars['Float']>;
  from_commission?: InputMaybe<Scalars['Float']>;
  to_commission?: InputMaybe<Scalars['Float']>;
};

export type AgencyAirlineCommissionModuleValues = {
  airline_code?: InputMaybe<Scalars['String']>;
  consolid_commission?: InputMaybe<Scalars['Float']>;
  from_commission?: InputMaybe<Scalars['Float']>;
  to_commission?: InputMaybe<Scalars['Float']>;
};

export type AgencyCommissionModule = {
  __typename?: 'AgencyCommissionModule';
  activities?: Maybe<Array<AgencyCommissionModuleActivity>>;
  airlines_commissions?: Maybe<Array<AgencyAirlineCommissionModule>>;
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type AgencyCommissionModuleActivity = {
  __typename?: 'AgencyCommissionModuleActivity';
  activity_type?: Maybe<AgencyCommissionModuleActivityType>;
  agency_id?: Maybe<Scalars['Int']>;
  agency_info?: Maybe<AgencyItem>;
  commission_module_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  err?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  transaction: Scalars['String'];
  user_id?: Maybe<Scalars['Int']>;
  user_info?: Maybe<UserItem>;
};

/** The agency commission module activity Type UNSPECIFIED|CREATED|EDITED|DELETED */
export enum AgencyCommissionModuleActivityType {
  AgencyCommissionModuleActivityTypeCreated = 'AGENCY_COMMISSION_MODULE_ACTIVITY_TYPE_CREATED',
  AgencyCommissionModuleActivityTypeDeleted = 'AGENCY_COMMISSION_MODULE_ACTIVITY_TYPE_DELETED',
  AgencyCommissionModuleActivityTypeEdited = 'AGENCY_COMMISSION_MODULE_ACTIVITY_TYPE_EDITED',
  AgencyCommissionModuleActivityTypeUnspecified = 'AGENCY_COMMISSION_MODULE_ACTIVITY_TYPE_UNSPECIFIED'
}

export type AgencyCommissionModuleInput = {
  airlines_commissions?: InputMaybe<Array<AgencyAirlineCommissionModuleInput>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AgencyCommissionModuleValues = {
  airlines_commissions?: InputMaybe<Array<AgencyAirlineCommissionModuleValues>>;
  created_at?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type AgencyConsolidFeeModule = {
  __typename?: 'AgencyConsolidFeeModule';
  activities?: Maybe<Array<AgencyConsolidFeeModuleActivity>>;
  business_consolid_fee?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['String']>;
  economy_consolid_fee?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type AgencyConsolidFeeModuleActivity = {
  __typename?: 'AgencyConsolidFeeModuleActivity';
  activity_type?: Maybe<AgencyConsolidFeeModuleActivityType>;
  agency_consolid_fee_module_id?: Maybe<Scalars['Int']>;
  agency_id?: Maybe<Scalars['Int']>;
  agency_info?: Maybe<AgencyItem>;
  created_at?: Maybe<Scalars['String']>;
  err?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  transaction: Scalars['String'];
  user_id?: Maybe<Scalars['Int']>;
  user_info?: Maybe<UserItem>;
};

/** The agency consolid fee module activity Type UNSPECIFIED|CREATED|EDITED|DELETED */
export enum AgencyConsolidFeeModuleActivityType {
  AgencyConsolidFeeModuleActivityTypeCreated = 'AGENCY_CONSOLID_FEE_MODULE_ACTIVITY_TYPE_CREATED',
  AgencyConsolidFeeModuleActivityTypeDeleted = 'AGENCY_CONSOLID_FEE_MODULE_ACTIVITY_TYPE_DELETED',
  AgencyConsolidFeeModuleActivityTypeEdited = 'AGENCY_CONSOLID_FEE_MODULE_ACTIVITY_TYPE_EDITED',
  AgencyConsolidFeeModuleActivityTypeUnspecified = 'AGENCY_CONSOLID_FEE_MODULE_ACTIVITY_TYPE_UNSPECIFIED'
}

export type AgencyConsolidFeeModuleInput = {
  business_consolid_fee?: InputMaybe<Scalars['Float']>;
  economy_consolid_fee?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AgencyConsolidFeeModuleValues = {
  business_consolid_fee?: InputMaybe<Scalars['Float']>;
  economy_consolid_fee?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type AgencyInput = {
  booking_contact_type?: InputMaybe<BookingContactType>;
  commission_module: Scalars['String'];
  consolid_fee_module: Scalars['String'];
  crm_company_id?: InputMaybe<Scalars['String']>;
  default_business_fee?: InputMaybe<Scalars['Float']>;
  default_economy_fee?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type AgencyItem = {
  __typename?: 'AgencyItem';
  id: Scalars['Int'];
  logo?: Maybe<AgencyLogoItem>;
  name?: Maybe<Scalars['String']>;
};

export type AgencyLogoItem = {
  __typename?: 'AgencyLogoItem';
  large_uri?: Maybe<Scalars['String']>;
  medium_uri?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  original_uri?: Maybe<Scalars['String']>;
  small_uri?: Maybe<Scalars['String']>;
};

export type AgencyValues = {
  booking_contact_type?: InputMaybe<BookingContactType>;
  commission_module?: InputMaybe<Scalars['String']>;
  consolid_fee_module?: InputMaybe<Scalars['String']>;
  crm_company_id?: InputMaybe<Scalars['String']>;
  default_business_fee?: InputMaybe<Scalars['Float']>;
  default_economy_fee?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type AvatarItem = {
  __typename?: 'AvatarItem';
  content?: Maybe<Array<Scalars['Int']>>;
  large_uri?: Maybe<Scalars['String']>;
  medium_uri?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  original_uri?: Maybe<Scalars['String']>;
  small_uri?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** The contact type AGENT|AGENCY */
export enum BookingContactType {
  BookingContactTypeAgency = 'BOOKING_CONTACT_TYPE_AGENCY',
  BookingContactTypeAgent = 'BOOKING_CONTACT_TYPE_AGENT',
  BookingContactTypeUnspecified = 'BOOKING_CONTACT_TYPE_UNSPECIFIED'
}

export type CreateAgencyResponse = {
  __typename?: 'CreateAgencyResponse';
  id: Scalars['Int'];
};

export type LogoItem = {
  __typename?: 'LogoItem';
  large_uri?: Maybe<Scalars['String']>;
  medium_uri?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  original_uri?: Maybe<Scalars['String']>;
  small_uri?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAgency: CreateAgencyResponse;
  createAgencyCommissionModule: Scalars['Int'];
  createAgencyConsolidFeeModule: Scalars['Int'];
  createUser: Scalars['Boolean'];
  deleteAgencyLogo: Scalars['Int'];
  deleteUser: Scalars['String'];
  disableAgency: Scalars['Boolean'];
  enableAgency: Scalars['Boolean'];
  putAgencyCommissionModule: Scalars['Boolean'];
  putAgencyConsolidFeeModule: Scalars['Boolean'];
  updateAgency: Agency;
  updateUser: User;
  uploadAgencyLogo: Scalars['Boolean'];
};


export type MutationCreateAgencyArgs = {
  values: AgencyInput;
};


export type MutationCreateAgencyCommissionModuleArgs = {
  values: AgencyCommissionModuleInput;
};


export type MutationCreateAgencyConsolidFeeModuleArgs = {
  values: AgencyConsolidFeeModuleInput;
};


export type MutationCreateUserArgs = {
  user: UserInput;
};


export type MutationDeleteAgencyLogoArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationDisableAgencyArgs = {
  id: Scalars['Float'];
};


export type MutationEnableAgencyArgs = {
  id: Scalars['Float'];
};


export type MutationPutAgencyCommissionModuleArgs = {
  values: AgencyCommissionModuleValues;
};


export type MutationPutAgencyConsolidFeeModuleArgs = {
  values: AgencyConsolidFeeModuleValues;
};


export type MutationUpdateAgencyArgs = {
  id: Scalars['Float'];
  values: AgencyValues;
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  values: UserValues;
};


export type MutationUploadAgencyLogoArgs = {
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  /** Delete agency */
  deleteAgency: Agency;
  /** Get all agencies */
  getAgencies: Array<Agency>;
  /** Get agency */
  getAgency: Agency;
  /** Get agency commission module */
  getAgencyCommissionModule: AgencyCommissionModule;
  /** Get all agency commission modules */
  getAgencyCommissionModules: Array<AgencyCommissionModule>;
  /** Get agency consolid fee module */
  getAgencyConsolidFeeModule: AgencyConsolidFeeModule;
  /** Get all agency consolid fee modules */
  getAgencyConsolidFeeModules: Array<AgencyConsolidFeeModule>;
  /** Get all roles */
  getRoles: Array<Role>;
  /** Get a user by id. */
  getUser: User;
  /** Get all users or based on filter if provided */
  getUsers: Array<User>;
};


export type QueryDeleteAgencyArgs = {
  id: Scalars['Float'];
};


export type QueryGetAgencyArgs = {
  id: Scalars['Float'];
};


export type QueryGetAgencyCommissionModuleArgs = {
  agency_id?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAgencyConsolidFeeModuleArgs = {
  agency_id?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryGetUsersArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type Role = {
  __typename?: 'Role';
  created_at?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  deleted_at?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  permissions?: Maybe<Array<RolePermission>>;
  role_type?: Maybe<RoleType>;
};

/** The role permission */
export enum RolePermission {
  RolePermissionCreateAgency = 'ROLE_PERMISSION_CREATE_AGENCY',
  RolePermissionCreateAirline = 'ROLE_PERMISSION_CREATE_AIRLINE',
  RolePermissionCreateAny = 'ROLE_PERMISSION_CREATE_ANY',
  RolePermissionCreateAvatarAgency = 'ROLE_PERMISSION_CREATE_AVATAR_AGENCY',
  RolePermissionCreateAvatarAny = 'ROLE_PERMISSION_CREATE_AVATAR_ANY',
  RolePermissionCreateBookingAgency = 'ROLE_PERMISSION_CREATE_BOOKING_AGENCY',
  RolePermissionCreateBookingAny = 'ROLE_PERMISSION_CREATE_BOOKING_ANY',
  RolePermissionCreateLocation = 'ROLE_PERMISSION_CREATE_LOCATION',
  RolePermissionCreateOffer = 'ROLE_PERMISSION_CREATE_OFFER',
  RolePermissionCreateOrderAgency = 'ROLE_PERMISSION_CREATE_ORDER_AGENCY',
  RolePermissionCreateOrderAny = 'ROLE_PERMISSION_CREATE_ORDER_ANY',
  RolePermissionCreateTicketAgency = 'ROLE_PERMISSION_CREATE_TICKET_AGENCY',
  RolePermissionCreateTicketAny = 'ROLE_PERMISSION_CREATE_TICKET_ANY',
  RolePermissionCreateUserAgency = 'ROLE_PERMISSION_CREATE_USER_AGENCY',
  RolePermissionCreateUserAny = 'ROLE_PERMISSION_CREATE_USER_ANY',
  RolePermissionDeleteAgency = 'ROLE_PERMISSION_DELETE_AGENCY',
  RolePermissionDeleteAirline = 'ROLE_PERMISSION_DELETE_AIRLINE',
  RolePermissionDeleteAny = 'ROLE_PERMISSION_DELETE_ANY',
  RolePermissionDeleteAvatarAgency = 'ROLE_PERMISSION_DELETE_AVATAR_AGENCY',
  RolePermissionDeleteAvatarAny = 'ROLE_PERMISSION_DELETE_AVATAR_ANY',
  RolePermissionDeleteAvatarOwn = 'ROLE_PERMISSION_DELETE_AVATAR_OWN',
  RolePermissionDeleteBookingAgency = 'ROLE_PERMISSION_DELETE_BOOKING_AGENCY',
  RolePermissionDeleteBookingAny = 'ROLE_PERMISSION_DELETE_BOOKING_ANY',
  RolePermissionDeleteBookingOwn = 'ROLE_PERMISSION_DELETE_BOOKING_OWN',
  RolePermissionDeleteLocation = 'ROLE_PERMISSION_DELETE_LOCATION',
  RolePermissionDeleteOffer = 'ROLE_PERMISSION_DELETE_OFFER',
  RolePermissionDeleteOrderAgency = 'ROLE_PERMISSION_DELETE_ORDER_AGENCY',
  RolePermissionDeleteOrderAny = 'ROLE_PERMISSION_DELETE_ORDER_ANY',
  RolePermissionDeleteOrderOwn = 'ROLE_PERMISSION_DELETE_ORDER_OWN',
  RolePermissionDeleteTicketAgency = 'ROLE_PERMISSION_DELETE_TICKET_AGENCY',
  RolePermissionDeleteTicketAny = 'ROLE_PERMISSION_DELETE_TICKET_ANY',
  RolePermissionDeleteTicketOwn = 'ROLE_PERMISSION_DELETE_TICKET_OWN',
  RolePermissionDeleteUserAgency = 'ROLE_PERMISSION_DELETE_USER_AGENCY',
  RolePermissionDeleteUserAny = 'ROLE_PERMISSION_DELETE_USER_ANY',
  RolePermissionDeleteUserOwn = 'ROLE_PERMISSION_DELETE_USER_OWN',
  RolePermissionReadAgency = 'ROLE_PERMISSION_READ_AGENCY',
  RolePermissionReadAgencySettings = 'ROLE_PERMISSION_READ_AGENCY_SETTINGS',
  RolePermissionReadAirline = 'ROLE_PERMISSION_READ_AIRLINE',
  RolePermissionReadAny = 'ROLE_PERMISSION_READ_ANY',
  RolePermissionReadAvatarAgency = 'ROLE_PERMISSION_READ_AVATAR_AGENCY',
  RolePermissionReadAvatarAny = 'ROLE_PERMISSION_READ_AVATAR_ANY',
  RolePermissionReadAvatarOwn = 'ROLE_PERMISSION_READ_AVATAR_OWN',
  RolePermissionReadBookingAgency = 'ROLE_PERMISSION_READ_BOOKING_AGENCY',
  RolePermissionReadBookingAny = 'ROLE_PERMISSION_READ_BOOKING_ANY',
  RolePermissionReadBookingOwn = 'ROLE_PERMISSION_READ_BOOKING_OWN',
  RolePermissionReadLocation = 'ROLE_PERMISSION_READ_LOCATION',
  RolePermissionReadOffer = 'ROLE_PERMISSION_READ_OFFER',
  RolePermissionReadOrderAgency = 'ROLE_PERMISSION_READ_ORDER_AGENCY',
  RolePermissionReadOrderAny = 'ROLE_PERMISSION_READ_ORDER_ANY',
  RolePermissionReadOrderOwn = 'ROLE_PERMISSION_READ_ORDER_OWN',
  RolePermissionReadTicketAgency = 'ROLE_PERMISSION_READ_TICKET_AGENCY',
  RolePermissionReadTicketAny = 'ROLE_PERMISSION_READ_TICKET_ANY',
  RolePermissionReadTicketOwn = 'ROLE_PERMISSION_READ_TICKET_OWN',
  RolePermissionReadUserAgency = 'ROLE_PERMISSION_READ_USER_AGENCY',
  RolePermissionReadUserAny = 'ROLE_PERMISSION_READ_USER_ANY',
  RolePermissionReadUserOwn = 'ROLE_PERMISSION_READ_USER_OWN',
  RolePermissionUnspecified = 'ROLE_PERMISSION_UNSPECIFIED',
  RolePermissionUpdateAgency = 'ROLE_PERMISSION_UPDATE_AGENCY',
  RolePermissionUpdateAirline = 'ROLE_PERMISSION_UPDATE_AIRLINE',
  RolePermissionUpdateAny = 'ROLE_PERMISSION_UPDATE_ANY',
  RolePermissionUpdateAvatarAgency = 'ROLE_PERMISSION_UPDATE_AVATAR_AGENCY',
  RolePermissionUpdateAvatarAny = 'ROLE_PERMISSION_UPDATE_AVATAR_ANY',
  RolePermissionUpdateAvatarOwn = 'ROLE_PERMISSION_UPDATE_AVATAR_OWN',
  RolePermissionUpdateBookingAgency = 'ROLE_PERMISSION_UPDATE_BOOKING_AGENCY',
  RolePermissionUpdateBookingAny = 'ROLE_PERMISSION_UPDATE_BOOKING_ANY',
  RolePermissionUpdateBookingOwn = 'ROLE_PERMISSION_UPDATE_BOOKING_OWN',
  RolePermissionUpdateLocation = 'ROLE_PERMISSION_UPDATE_LOCATION',
  RolePermissionUpdateOffer = 'ROLE_PERMISSION_UPDATE_OFFER',
  RolePermissionUpdateOrderAgency = 'ROLE_PERMISSION_UPDATE_ORDER_AGENCY',
  RolePermissionUpdateOrderAny = 'ROLE_PERMISSION_UPDATE_ORDER_ANY',
  RolePermissionUpdateOrderOwn = 'ROLE_PERMISSION_UPDATE_ORDER_OWN',
  RolePermissionUpdateTicketAgency = 'ROLE_PERMISSION_UPDATE_TICKET_AGENCY',
  RolePermissionUpdateTicketAny = 'ROLE_PERMISSION_UPDATE_TICKET_ANY',
  RolePermissionUpdateTicketOwn = 'ROLE_PERMISSION_UPDATE_TICKET_OWN',
  RolePermissionUpdateUserAgency = 'ROLE_PERMISSION_UPDATE_USER_AGENCY',
  RolePermissionUpdateUserAny = 'ROLE_PERMISSION_UPDATE_USER_ANY',
  RolePermissionUpdateUserOwn = 'ROLE_PERMISSION_UPDATE_USER_OWN'
}

/** The role type */
export enum RoleType {
  RoleTypeAdmin = 'ROLE_TYPE_ADMIN',
  RoleTypeAgencyAdmin = 'ROLE_TYPE_AGENCY_ADMIN',
  RoleTypeAgent = 'ROLE_TYPE_AGENT',
  RoleTypeUnspecified = 'ROLE_TYPE_UNSPECIFIED'
}

export type User = {
  __typename?: 'User';
  agency?: Maybe<Agency>;
  agency_id: Scalars['Int'];
  avatar?: Maybe<AvatarItem>;
  deleted?: Maybe<Scalars['Boolean']>;
  deleted_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_activity?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: Maybe<Array<Scalars['String']>>;
  phone_number?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['JSON']>;
  username?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  agency_id?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
};

export type UserInput = {
  agency_id: Scalars['Float'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  middle_name?: InputMaybe<Scalars['String']>;
  phone_number: Scalars['String'];
  roles: Array<RoleType>;
  username: Scalars['String'];
};

export type UserItem = {
  __typename?: 'UserItem';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

export type UserValues = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<RoleType>>;
};

export type NameFragment = { __typename?: 'Agency', name?: string | null };

export const NameFragmentDoc = gql`
    fragment Name on Agency {
  name
}
    `;