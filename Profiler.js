

// 1. The profilinglevel was set to 2 and the set of 12 queries were executed. the default parameter slowms: 10 and  sampleRate: 1
db.setProfilingLevel(2,{ slowms: 10 })

airline1> db.system.profile.find({"command.pipeline": { $exists: true }},{"command.pipeline":1}).sort({$natural:-1})
[
  {
    command: {   
      pipeline: [
        {
          '$project': {
            year: { '$year': '$bookedon' },
            month: { '$month': '$bookedon' },
            dayOfMonth: { '$dayOfMonth': '$bookedon' },
            flight: '$flights'
          }
        },
        { '$match': { '$and': [ [Object], [Object], [Object] ] } },
        {
          '$group': { _id: { date: [Object] }, flights: { '$push': '$flight' } }
        },
        { '$unwind': '$flights' },
        {
          '$lookup': {
            from: 'booking',
            localField: 'flights',
            foreignField: 'flights',
            as: 'booking'
          }
        },
        { '$unwind': '$booking' },
        { '$group': { _id: '$booking.bookingid' } }
      ]
    }
  },
  {
    command: {
      pipeline: [
        {
          '$project': {
            from: '$Departure',
            to: '$Arrival',
            _id: 0,
            difference: { '$divide': [Array] }
          }
        }
      ]
    }
  },
  {
    command: {
      pipeline: [
        {
          '$project': {
            from: '$Departure',
            to: '$Arrival',
            _id: 0,
            difference: { '$divide': [Array] }
          }
        }
      ]
    }
  },
  {
    command: {
      pipeline: [
        { '$group': { _id: '$plane_id', count: { '$sum': 1 } } }
      ]
    }
  },
  {
    command: {
      pipeline: [
        { '$project': { bookingid: 1, bookedby: 1, totalcost: 1 } },
        { '$sort': { totalcost: -1 } },
        { '$limit': 2 }
      ]
    }
  },
  {
    command: {
      pipeline: [
        {
          '$group': { _id: '$Designation', sumSalary: { '$sum': '$Salary' } }
        },
        { '$sort': { sumSalary: -1 } }
      ]
    }
  }
]
airline1> db.system.profile.find({"command.pipeline": { $exists: true }},{"command.pipeline":1}).sort({$natural:-1})
[
  {
    command: {
      pipeline: [
        {
          '$project': {
            year: { '$year': '$bookedon' },
            month: { '$month': '$bookedon' },
            dayOfMonth: { '$dayOfMonth': '$bookedon' },
            flight: '$flights'
          }
        },
        { '$match': { '$and': [ [Object], [Object], [Object] ] } },
        {
          '$group': { _id: { date: [Object] }, flights: { '$push': '$flight' } }
        },
        { '$unwind': '$flights' },
        {
          '$lookup': {
            from: 'booking',
            localField: 'flights',
            foreignField: 'flights',
            as: 'booking'
          }
        },
        { '$unwind': '$booking' },
        { '$group': { _id: '$booking.bookingid' } }
      ]
    }
  },
  {
    command: {
      pipeline: [
        {
          '$project': {
            from: '$Departure',
            to: '$Arrival',
            _id: 0,
            difference: { '$divide': [Array] }
          }
        }
      ]
    }
  },
  {
    command: {
      pipeline: [
        {
          '$project': {
            from: '$Departure',
            to: '$Arrival',
            _id: 0,
            difference: { '$divide': [Array] }
          }
        }
      ]
    }
  },
  {
    command: {
      pipeline: [
        { '$group': { _id: '$plane_id', count: { '$sum': 1 } } }
      ]
    }
  },
  {
    command: {
      pipeline: [
        { '$project': { bookingid: 1, bookedby: 1, totalcost: 1 } },
        { '$sort': { totalcost: -1 } },
        { '$limit': 2 }
      ]
    }
  },
  {
    command: {
      pipeline: [
        {
          '$group': { _id: '$Designation', sumSalary: { '$sum': '$Salary' } }
        },
        { '$sort': { sumSalary: -1 } }
      ]
    }
  }
]

// 3. The query showed all the command being executed with the plan summary COLLSCAN. As the profiling paramter were set to "slowms: 10" no data were capture that executed below 1 second.
db.system.profile.find({"planSummary":{$eq:"COLLSCAN"},"op" : {$eq:"query"}}).sort({millis:-1})
[
  {
    op: 'query',
    ns: 'airline1.Pilots',
    command: {
      find: 'Pilots',
      filter: {},
      sort: { Flying_test_date: 1 },
      limit: 1,
      lsid: { id: UUID("a1088932-d727-411d-9b65-a053a9abe4b8") },
      '$db': 'airline1'
    },
    keysExamined: 0,
    docsExamined: 7,
    hasSortStage: true,
    cursorExhausted: true,
    numYield: 0,
    nreturned: 1,
    queryHash: '7AC63A47',
    planCacheKey: 'F1323438',
    locks: {
      Global: { acquireCount: { r: Long("1") } },
      Mutex: { acquireCount: { r: Long("1") } }
    },
    flowControl: {},
    responseLength: 307,
    protocol: 'op_msg',
    millis: 0,
    planSummary: 'COLLSCAN',
    execStats: {
      stage: 'SORT',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 11,
      advanced: 1,
      needTime: 9,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      sortPattern: { Flying_test_date: 1 },
      memLimit: 104857600,
      limitAmount: 1,
      type: 'simple',
      totalDataSizeSorted: 0,
      usedDisk: false,
      inputStage: {
        stage: 'COLLSCAN',
        nReturned: 7,
        executionTimeMillisEstimate: 0,
        works: 9,
        advanced: 7,
        needTime: 1,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        direction: 'forward',
        docsExamined: 7
      }
    },
    ts: ISODate("2021-12-23T16:40:40.953Z"),
    client: '127.0.0.1',
    appName: 'mongosh 1.1.2',
    allUsers: [],
    user: ''
  },
  {
    op: 'query',
    ns: 'airline1.Staff',
    command: {
      find: 'Staff',
      filter: {
        '$or': [ { Name: /sa/ }, { Age: { '$gt': 30 } } ]
      },
      lsid: { id: UUID("a1088932-d727-411d-9b65-a053a9abe4b8") },
      '$db': 'airline1'
    },
    keysExamined: 0,
    docsExamined: 14,
    cursorExhausted: true,
    numYield: 0,
    nreturned: 8,
    queryHash: '3D8B790B',
    planCacheKey: 'DD55C7D0',
    locks: {
      Global: { acquireCount: { r: Long("1") } },
      Mutex: { acquireCount: { r: Long("1") } }
    },
    flowControl: {},
    responseLength: 1471,
    protocol: 'op_msg',
    millis: 0,
    planSummary: 'COLLSCAN',
    execStats: {
      stage: 'SUBPLAN',
      nReturned: 8,
      executionTimeMillisEstimate: 1,
      works: 16,
      advanced: 8,
      needTime: 7,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      inputStage: {
        stage: 'COLLSCAN',
        filter: { '$or': [ { Age: [Object] }, { Name: [Object] } ] },
        nReturned: 8,
        executionTimeMillisEstimate: 1,
        works: 16,
        advanced: 8,
        needTime: 7,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        direction: 'forward',
        docsExamined: 14
      }
    },
    ts: ISODate("2021-12-23T16:41:41.057Z"),
    client: '127.0.0.1',
    appName: 'mongosh 1.1.2',
    allUsers: [],
    user: ''
  },
  {
    op: 'query',
    ns: 'airline1.booking',
    command: {
      find: 'booking',
      filter: { bookedby: 'shek' },
      limit: 1,
      lsid: { id: UUID("a1088932-d727-411d-9b65-a053a9abe4b8") },
      '$db': 'airline1'
    },
    keysExamined: 0,
    docsExamined: 2,
    cursorExhausted: true,
    numYield: 0,
    nreturned: 1,
    queryHash: '74AF4BD3',
    planCacheKey: 'B42D9710',
    locks: {
      Global: { acquireCount: { r: Long("1") } },
      Mutex: { acquireCount: { r: Long("1") } }
    },
    flowControl: {},
    responseLength: 332,
    protocol: 'op_msg',
    millis: 0,
    planSummary: 'COLLSCAN',
    execStats: {
      stage: 'LIMIT',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 4,
      advanced: 1,
      needTime: 2,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      limitAmount: 1,
      inputStage: {
        stage: 'COLLSCAN',
        filter: { bookedby: { '$eq': 'shek' } },
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 3,
        advanced: 1,
        needTime: 2,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 0,
        direction: 'forward',
        docsExamined: 2
      }
    },
    ts: ISODate("2021-12-23T16:41:46.597Z"),
    client: '127.0.0.1',
    appName: 'mongosh 1.1.2',
    allUsers: [],
    user: ''
  },
  {
    op: 'query',
    ns: 'airline1.system.profile',
    command: {
      find: 'system.profile',
      filter: { 'command.pipeline': { '$exists': true } },
      sort: { '$natural': -1 },
      projection: { 'command.pipeline': 1 },
      lsid: { id: UUID("a1088932-d727-411d-9b65-a053a9abe4b8") },
      '$db': 'airline1'
    },
    keysExamined: 0,
    docsExamined: 13,
    cursorExhausted: true,
    numYield: 0,
    nreturned: 6,
    locks: {
      Global: { acquireCount: { r: Long("1") } },
      Mutex: { acquireCount: { r: Long("1") } }
    },
    flowControl: {},
    responseLength: 1655,
    protocol: 'op_msg',
    millis: 0,
    planSummary: 'COLLSCAN',
    execStats: {
      stage: 'PROJECTION_DEFAULT',
      nReturned: 6,
      executionTimeMillisEstimate: 0,
      works: 15,
      advanced: 6,
      needTime: 8,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      transformBy: {},
      inputStage: {
        stage: 'COLLSCAN',
        filter: { 'command.pipeline': { '$exists': true } },
        nReturned: 6,
        executionTimeMillisEstimate: 0,
        works: 15,
        advanced: 6,
        needTime: 8,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        direction: 'backward',
        docsExamined: 13
      }
    },
    ts: ISODate("2021-12-23T16:42:00.028Z"),
    client: '127.0.0.1',
    appName: 'mongosh 1.1.2',
    allUsers: [],
    user: ''
  },
  {
    op: 'query',
    ns: 'airline1.system.profile',
    command: {
      find: 'system.profile',
      filter: { 'command.pipeline': { '$exists': true } },
      sort: { '$natural': -1 },
      projection: { 'command.pipeline': 1 },
      lsid: { id: UUID("a1088932-d727-411d-9b65-a053a9abe4b8") },
      '$db': 'airline1'
    },
    keysExamined: 0,
    docsExamined: 14,
    cursorExhausted: true,
    numYield: 0,
    nreturned: 6,
    locks: {
      Global: { acquireCount: { r: Long("1") } },
      Mutex: { acquireCount: { r: Long("1") } }
    },
    flowControl: {},
    responseLength: 1655,
    protocol: 'op_msg',
    millis: 0,
    planSummary: 'COLLSCAN',
    execStats: {
      stage: 'PROJECTION_DEFAULT',
      nReturned: 6,
      executionTimeMillisEstimate: 0,
      works: 16,
      advanced: 6,
      needTime: 9,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      transformBy: {},
      inputStage: {
        stage: 'COLLSCAN',
        filter: { 'command.pipeline': { '$exists': true } },
        nReturned: 6,
        executionTimeMillisEstimate: 0,
        works: 16,
        advanced: 6,
        needTime: 9,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        direction: 'backward',
        docsExamined: 14
      }
    },
    ts: ISODate("2021-12-23T16:42:11.408Z"),
    client: '127.0.0.1',
    appName: 'mongosh 1.1.2',
    allUsers: [],
    user: ''
  }
]





//4. The query showes top 10 slowest query.
> db.system.profile.find({"op" : {$eq:"command"}}, {"command.pipeline" : NumberInt(1),"millis": NumberInt(1)}).sort({millis:-1},{$limit:10})
[
  { command: {}, millis: 291 },
  {
    command: {
      pipeline: [
        {
          '$project': {
            year: { '$year': '$bookedon' },
            month: { '$month': '$bookedon' },
            dayOfMonth: { '$dayOfMonth': '$bookedon' },
            flight: '$flights'
          }
        },
        { '$match': { '$and': [ [Object], [Object], [Object] ] } },
        {
          '$group': { _id: { date: [Object] }, flights: { '$push': '$flight' } }
        },
        { '$unwind': '$flights' },
        {
          '$lookup': {
            from: 'booking',
            localField: 'flights',
            foreignField: 'flights',
            as: 'booking'
          }
        },
        { '$unwind': '$booking' },
        { '$group': { _id: '$booking.bookingid' } }
      ]
    },
    millis: 1
  },
  { command: {}, millis: 0 },
  {
    command: {
      pipeline: [
        {
          '$group': { _id: '$Designation', sumSalary: { '$sum': '$Salary' } }
        },
        { '$sort': { sumSalary: -1 } }
      ]
    },
    millis: 0
  },
  {
    command: {
      pipeline: [
        { '$project': { bookingid: 1, bookedby: 1, totalcost: 1 } },
        { '$sort': { totalcost: -1 } },
        { '$limit': 2 }
      ]
    },
    millis: 0
  },
  { command: {}, millis: 0 },
  {
    command: {
      pipeline: [
        { '$group': { _id: '$plane_id', count: { '$sum': 1 } } }
      ]
    },
    millis: 0
  },
  {
    command: {
      pipeline: [
        {
          '$project': {
            from: '$Departure',
            to: '$Arrival',
            _id: 0,
            difference: { '$divide': [Array] }
          }
        }
      ]
    },
    millis: 0
  },
  {
    command: {
      pipeline: [
        {
          '$project': {
            from: '$Departure',
            to: '$Arrival',
            _id: 0,
            difference: { '$divide': [Array] }
          }
        }
      ]
    },
    millis: 0
  }
]

