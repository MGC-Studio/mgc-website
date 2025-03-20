export type ServiceData = {
    id: string
    icon: string
    title: string
    description: string
    features: string[]
    image: string
}

export type Service = Omit<ServiceData, 'icon'> & {
    icon: JSX.Element
}