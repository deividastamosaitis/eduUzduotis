"use strict";
exports.__esModule = true;
exports.users = void 0;
var Types_1 = require("../interfaces/Types");
var faker = require("faker");
var users = [
    {
        userId: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        status: Types_1.Status.ACTIVE,
        created: faker.datatype.datetime(),
        updated: faker.datatype.datetime(),
        deleted: faker.datatype.datetime(),
        photos: [
            {
                imgId: faker.datatype.number(),
                imgUrl: faker.internet.avatar(),
                verified: true,
                description: faker.lorem.sentences(),
                fCount: 30,
                imgCreated: faker.datatype.datetime(),
                imgUpdated: faker.datatype.datetime(),
                imgDeleted: faker.datatype.datetime(),
                tags: [
                    {
                        tagId: faker.datatype.number(),
                        tag: "#nezinau #ar #gerai #darau",
                        tagCreated: faker.datatype.datetime(),
                        tagUpdated: faker.datatype.datetime(),
                        tagDeleted: faker.datatype.datetime()
                    }
                ]
            }
        ]
    },
];
exports.users = users;
