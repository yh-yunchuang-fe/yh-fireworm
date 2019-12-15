const router = require('express').Router();
let Terms = require('../models/terms');

router.route('/:subject').get((req, res) => {
    const subject = req.params.subject
    Terms.find({subject})
        .then(terms => res.json({
            code: 0,
            data: terms
        })).catch(err => res.status(500).json({
            code: 500,
            message: '请求出错'
        }))
})

router.route('/').post((req, res) => {
    const termData = req.body;
    console.log(termData)
    const title = termData.title;
    const description = termData.description;
    const subject = String(termData.subject);
    const author = termData.author;
    const newTerm = new Terms({
        title,
        description,
        subject,
        author
    });
    newTerm.save()
        .then(terms => res.json({
            code: 0,
            message: '添加成功'
        })).catch(err => {
            console.log(err)
            res.status(500).json({
                code: 500,
                message: '请求出错'
        })
    })
})

module.exports = router;