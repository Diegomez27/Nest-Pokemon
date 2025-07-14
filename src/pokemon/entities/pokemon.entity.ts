import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document {

    // el id no es necesario de especificar // mongo me lo da
    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    
    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);