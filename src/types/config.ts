export type EnvProps = {
    development: any;
    production: any;
    test: any;
};

export type ConfigProps = {
    env: EnvProps;
};

export type DemoDataProps = {
    name: string;
    icon: string;
    sub?: string;
    amount?: string;
    price?: string;
};
