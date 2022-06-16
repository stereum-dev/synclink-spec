module.exports = {
  components: {
    schemas: {
      Epoch: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'Epoch id',
            example: 4255,
          },
          slots: {
            $ref: '#/components/schemas/BeaconBlockBody',
          },
        },
      },

      Eth1Data: {
        type: 'object',
        description:
          'The [`Eth1Data`](https://github.com/ethereum/consensus-specs/blob/v1.0.1/specs/phase0/beacon-chain.md#eth1data) object from the CL spec.',
        properties: {
          deposit_root: {
            allOf: [
              {
                $ref: '#/components/schemas/Root',
              },
              {
                description: 'Root of the deposit tree.',
              },
            ],
          },
          deposit_count: {
            allOf: [
              {
                $ref: '#/components/schemas/Uint64',
              },
              {
                description: 'Total number of deposits.',
              },
            ],
          },
          block_hash: {
            allOf: [
              {
                $ref: '#/components/schemas/Root',
              },
              {
                description: 'Ethereum 1.x block hash.',
              },
            ],
          },
        },
      },

      BeaconBlockBody: {
        type: 'object',
        description:
          'The [`BeaconBlockBody`](https://github.com/ethereum/consensus-specs/blob/v1.0.1/specs/phase0/beacon-chain.md#beaconblockbody) object from the CL spec.',
        properties: {
          randao_reveal: {
            allOf: [
              {
                $ref: '#/components/schemas/Signature',
              },
              {
                description: 'The RanDAO reveal value provided by the validator.',
              },
            ],
          },
          eth1_data: {
            $ref: '#/components/schemas/Eth1Data',
          },
          graffiti: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{64}$',
          },
          proposer_slashings: {
            type: 'array',
          },
          attester_slashings: {
            type: 'array',
          },
          attestations: {
            type: 'array',
          },
          deposits: {
            type: 'array',
          },
          voluntary_exits: {
            type: 'array',
          },
        },
      },

      Pubkey: {
        type: 'string',
        pattern: '^0x[a-fA-F0-9]{96}$',
        description:
          "The validator's BLS public key, uniquely identifying them. _48-bytes, hex encoded with 0x prefix, case insensitive._",
        example: '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
      },
      ForkVersion: {
        type: 'string',
        description: 'a fork version number',
        example: '0x00000000',
        pattern: '^0x[a-fA-F0-9]{8}$',
      },
      Version: {
        type: 'string',
        description:
          'A string which uniquely identifies the client implementation and its version; similar to [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3).',
        example: 'Lighthouse/v0.1.5 (Linux x86_64)',
      },
      GenesisTime: {
        allOf: [
          {
            $ref: '#/components/schemas/Uint64',
          },
          {
            example: '1590832934',
          },
          {
            description:
              'The genesis_time configured for the beacon node, which is the unix time in seconds at which the Eth2.0 chain began.',
          },
        ],
      },
      Gwei: {
        $ref: '#/components/schemas/Uint64',
      },
      Uint64: {
        type: 'string',
        example: '1',
      },
      Uint256: {
        type: 'string',
        example: '1',
      },
      DependentRoot: {
        allOf: [
          {
            $ref: '#/components/schemas/Root',
          },
          {
            description: 'The block root that this response is dependent on.',
          },
        ],
      },
      ExecutionOptimistic: {
        allOf: [
          {
            type: 'boolean',
          },
          {
            example: false,
          },
          {
            description:
              'True if the response references an unverified execution payload. Optimistic information may be invalidated at a later time. If the field is not present, assume the False value.',
          },
        ],
      },
      Root: {
        type: 'string',
        example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
        pattern: '^0x[a-fA-F0-9]{64}$',
      },
      Bytes32: {
        type: 'string',
        example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
        pattern: '^0x[a-fA-F0-9]{64}$',
      },
      Graffiti: {
        type: 'string',
        format: 'hex',
        example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
        pattern: '^0x[a-fA-F0-9]{64}$',
      },
      Hex: {
        type: 'string',
        pattern: '^0x[a-fA-F0-9]{2,}$',
      },
      Signature: {
        type: 'string',
        pattern: '^0x[a-fA-F0-9]{192}$',
        example:
          '0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505',
      },
      Uint8: {
        type: 'string',
        description: 'Unsigned 8 bit integer, max value 255',
        pattern: '^[1-2]?[0-9]{1,2}$',
        example: '0',
      },
      ExecutionAddress: {
        type: 'string',
        description: 'An address on the execution (Ethereum 1) network.',
        example: '0xabcf8e0d4e9587369b2301d0790347320302cc09',
        pattern: '^0x[a-fA-F0-9]{40}$',
      },
      Transaction: {
        type: 'string',
        description: 'A transaction on the execution (Ethereum 1) network.',
        example:
          '0x02f878831469668303f51d843b9ac9f9843b9aca0082520894c93269b73096998db66be0441e836d873535cb9c8894a19041886f000080c001a031cc29234036afbf9a1fb9476b463367cb1f957ac0b919b69bbc798436e604aaa018c4e9c3914eb27aadd0b91e10b18655739fcf8c1fc398763a9f1beecb8ddc86',
        pattern: '^0x[a-fA-F0-9]{0,2147483648}$',
      },
      ExtraData: {
        type: 'string',
        description: 'Extra data on the execution (Ethereum 1) network.',
        example: '0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2',
        pattern: '^0x[a-fA-F0-9]{0,64}$',
      },
      LogsBloom: {
        type: 'string',
        example:
          '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        pattern: '^0x[a-fA-F0-9]{512}$',
      },

      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          internal_code: {
            type: 'string',
          },
        },
      },
    },
  },
};