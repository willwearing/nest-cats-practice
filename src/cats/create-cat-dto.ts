/* 
Interfaces and DTO's are roughly the same thing 
The major difference being: 
Not only preference, but also use case. Interfaces can not compute properties or use decorators, 
whereas classes can. NestJS recommends to use classes because you can add decorators from 
class-validator to properties such as @IsString() or @Max(20). With interfaces such a validation 
would only be possible outside of the interface context.
To read more: https://github.com/nestjs/nest/issues/1228
*/

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
} 
