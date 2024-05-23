import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateEmployeeInput {
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