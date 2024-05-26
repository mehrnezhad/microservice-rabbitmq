import createHttpError from "http-errors"
const notFoundHandler = (app) => {

    app.use((req, res, next) => {

        const error = createHttpError.NotFound
        res.json({
            statusCode: error.status,
            data: {
                message: error.message ?? 'آدرس در سمت سرور یافت نشد'
            }
        })
    })
}

export default notFoundHandler