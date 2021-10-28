import { Field, InputType, Int } from '@nestjs/graphql'
import { type } from 'os'

@InputType()
export class MovieInput {
    @Field()
    readonly title: string

    @Field()
    readonly description: string

    @Field((type) => Int)
    readonly published: number
}

@InputType()
export class UpdateMovieInput {
    @Field()
    readonly _id: string

    @Field({ nullable: true })
    readonly title?: string

    @Field({ nullable: true })
    readonly description?: string

    @Field((type) => Int, { nullable: true })
    readonly published?: number
}

@InputType()
export class FindMovieInput {
    @Field()
    readonly _id: string
}