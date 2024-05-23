import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Employee {
    @Field()
    id: string;
    @Field()
    firstName: string;
    @Field()
    lastName: string;
    @Field()
    position: string;
    @Field()
    email: string;
    @Field()
    address: string;
}