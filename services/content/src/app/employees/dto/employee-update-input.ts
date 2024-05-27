import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateEmployeeInput {
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

@InputType()
export class CreateEmployeeInput {
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