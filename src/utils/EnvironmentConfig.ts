interface EnvironmentConfig {
    host: string,
    dev: boolean,
    exampleKey: string
}

const defaultConfig: EnvironmentConfig = {
    host: "localhost",
    dev: true,
    exampleKey: "value"
}

const config: EnvironmentConfig[] = [
    defaultConfig
]

export const getEnvironmentConfig = (): EnvironmentConfig => {
    let hostname = window.location.hostname
    let conf = config.find(e => e.host === hostname)
    if(conf) return conf
    else {
        console.log(`No environment config found for host: ${hostname}`)
        return defaultConfig
    }
}