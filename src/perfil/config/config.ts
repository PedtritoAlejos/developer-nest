/* eslint-disable prettier/prettier */
import { load } from 'ts-dotenv';

const env = load({
  TYPE_DB:String,
  DATABASE: String,
  HOST_DB:String,
  PORT_DB: Number,
  USERNAME_DB:String,
  PASSWORD_DB:String,
  SYNCHRONIZE:Boolean,

});

export const getProperty = (key:string): any => {
    return env[key];
}