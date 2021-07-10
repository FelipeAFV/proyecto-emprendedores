import { Column, Entity, OneToMany, PrimaryGeneratedColumn , JoinColumn, ManyToOne} from "typeorm";
import { Profile } from "./profile";
import { Store } from './store';
import { User } from './user';
//import {MinLength} from 'class-validator';


@Entity("comment")
export class Comment {

    @PrimaryGeneratedColumn({name: "comment_id"})
    id: number;

    @Column({name: "content"})
    //@MinLength(8)
    content: string;
    
    @ManyToOne( () => Store, store => store.comments)
    @JoinColumn({name: "store_id"})
    store: Store;

    @ManyToOne( () => User, user => user.comments)
    @JoinColumn({name: "user_id"})
    user: User;
}