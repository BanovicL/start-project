import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Employee {
    @Field()
    id: string;
    @Field()
    firstname: string;
    @Field()
    lastname: string;
    @Field()
    position: string;
    @Field()
    email: string;
    @Field()
    address: string;
}