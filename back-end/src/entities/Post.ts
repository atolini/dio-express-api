import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('posts')
class Post {
    @PrimaryColumn()
    id: string;

    @Column()
    content: string

    @Column()
    name: string

    @Column()
    title: string

    @Column()
    email: string

    @Column()
    date: number
}

export { Post }