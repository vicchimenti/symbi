/**
 * Filename: IUser.ts
 * Created: 5.5.2019
 * Description: 
 */
import { Document } from "mongoose";
import { UserType } from "./enums";
import { ICaregiver } from "./ICaregiver";
import { IParent } from "./IParent";

export interface IUser extends Document {
    firstName?: string;
    lastName?: string;
    gender?: string;
    profileImage?: Blob;
    email: string;
    password: string;
    address?: IAddress;
    phoneNumber?: number;
    bio?: string;
    profiles?: IProfile[];
}

export interface IProfile {
    userType: UserType;
    profileData: IParent | ICaregiver;
}

export interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    geoLocation: string[];
}