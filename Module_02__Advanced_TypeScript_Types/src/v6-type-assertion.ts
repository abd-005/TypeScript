//* type assertion

//* "as" syntax

type Status = 'pending' | 'approved' | 'rejected';

const someStatus = "pending"

const showStatus = (status: Status) => {
    console.log("Your current application status is:", status)
}

showStatus(someStatus as Status)


//* no-null assertion

interface Config {
    port?: number
}

const config: Config = {
    port: 5000
}

const currentPort: number = config.port! 
// const currentPort: number = config.port as number //? alternative of not-null 


//* constant assertion

const configuration = {
    port: 8080,
    prefix: "/api/v2",
} as const 

// configuration.port = 5050; //! Cannot assign to 'port' or 'prefix' because they are read-only property. 
