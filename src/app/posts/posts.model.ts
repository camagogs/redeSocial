export class PostsModel {

        constructor(
            public id: number,
            public nomePessoa: string,
            public texto: string,
            public qtdLikes: number
        ){}
    }