const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
const ENVIRONMENT = process.env.NODE_ENV;

export { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, ENVIRONMENT };
