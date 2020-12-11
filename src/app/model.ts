import { IonDatetime } from "@ionic/angular";

export interface USER {
    id: number;
    status: number;
    name: string;
    firstname: string;
    email: string;
    password: string;
    sex: number;
    wallet: number;
    registration_date: IonDatetime;
    phone: number;
    address: string;
    postal_code: number;
    town: string;
    image_id: number;
}