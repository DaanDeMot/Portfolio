export interface MarsRoverProps {
    photos: [
        {
            id: number,
            sol: number,
            camera: {
                id: number,
                name: string,
                rover_id: 5,
                full_name: string
            },
            img_src: string,
            earth_date:string
            rover: {
                id: number,
                name: string
                landing_date: string
                launch_date: string
                status: string
            }
        },
        {
            id: number,
            sol: number,
            camera: {
                id: number,
                name: string
                rover_id: 5,
                full_name: string
            },
            img_src: string
            earth_date: string
            rover: {
                id: number,
                name: string
                landing_date:string
                launch_date: string
                status: string
            }
        },
        {
            id: number,
            sol: number,
            camera: {
                id: 21,
                name: string
                rover_id: 5,
                full_name: string
            },
            img_src: string,
            earth_date: string
            rover: {
                id: number,
                name: string
                landing_date: string
                launch_date: string
                status: string
            }
        },
        {
            id: number,
            sol: number,
            camera: {
                id: 21,
                name: string
                rover_id: 5,
                full_name: string
            },
            img_src : string
            earth_date:string
            rover: {
                id: number,
                name: string
                landing_date: string
                launch_date: string
                status: string
            }
        }
    ]
}