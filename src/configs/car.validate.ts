import Joi from "joi";

const carValidate = Joi.object({
    'brand': Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Бренд містить лише літери (мін 1 та макс 20 літер)'
    }),
    'price': Joi.number().min(0).max(1000000).required().messages({
        'string.pattern.base': 'ціна min 0 max 1000000'
    }),
    'year': Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'string.pattern.base': `рік min 1990 max ${new Date().getFullYear()}`
    })
})

export {
    carValidate
}