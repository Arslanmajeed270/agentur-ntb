// import { UserStatus, IUser } from '@lib/types';
// import { Uuid } from '@lib/utils';
// import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
// import { IsOptional } from 'class-validator';

// @ObjectType()
// export class UserDto {
//   @Field()
//   id: Uuid;

//   @Field()
//   firstName: string;

//   @Field()
//   lastName: string;

//   @Field()
//   email: string;

//   @Field((type) => UserStatus)
//   status: UserStatus;

//   @Field((type) => [OrganizationDto], { nullable: `itemsAndList` })
//   @IsOptional()
//   organizations?: IOrganization;

//   constructor(user: IUser) {
//     this.id = user.id;
//     this.firstName = user.firstName;
//     this.lastName = user.lastName;
//     this.email = user.email;
//     this.status = user.status;
//   }
// }

// registerEnumType(UserStatus, {
//   name: `UserStatus`,
// });

export const demo = '';
