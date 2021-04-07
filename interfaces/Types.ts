export enum Status {
    ACTIVE = "active",
    DISABLE = "disable",
    BANNED = "banned",
}
type ITags = {
    tagId?: number;
    tag?: string;
    tagCreated?: Date;
    tagUpdated?: Date;
    tagDeleted?: Date;
}
export interface IPhoto extends ITags {
    imgId?: number;
    imgUrl?: string;
    verified?: boolean;
    description?: string;
    fCount?: number;
    imgCreated?: Date;
    imgUpdated?: Date;
    imgDeleted?: Date;
    tags?: ITags[];
}

export interface IUser extends IPhoto {
    userId: number;
    firstName: string;
    lastName: string;
    status: Status;
    created: Date;
    updated: Date;
    deleted: Date;
    photos?: IPhoto[];
}