module.exports = {
  get: {
    tags: ['SyncLink Server'],
    description: 'Get latest epochs',
    operationId: 'getEpochs',
    parameters: [],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  value: 'success',
                },
                epochs: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Epoch',
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad request',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
              example: {
                message: 'message',
                internal_code: 'Invalid id',
              },
            },
          },
        },
      },
    },
  },
};
