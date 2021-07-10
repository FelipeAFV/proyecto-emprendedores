import { Comment } from "../model/entity/comment";
import { GenericService } from "./generic-service";

class CommentService extends GenericService<Comment> {

    constructor() {
        super(Comment);
    }

}

export default new CommentService();