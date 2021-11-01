import { RoutesEntity } from './RoutesEntity';

export const RoutesList: RoutesEntity[] = [
  RoutesEntity.fromJson({ name: 'home', path: 'home' }),
  RoutesEntity.fromJson({ name: 'login', path: 'login' }),
];
