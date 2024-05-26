import autoBind from "auto-bind"

class ProductController {
    constructor() {
        autoBind(this)
    }

    


}

export const productController = new ProductController()