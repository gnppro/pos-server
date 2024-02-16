import { Injectable } from '@nestjs/common';
import { Product, Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // This action adds a new product
  create(createProductDto: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  // This action returns all products
  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  // This action returns a #${id} product
  findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id: id },
    });
  }

  // This action updates a #${id} product
  update(
    id: number,
    updateProductDto: Prisma.ProductUpdateInput,
  ): Promise<Product> {
    return this.prisma.product.update({
      where: { id: id },
      data: updateProductDto,
    });
  }

  // This action removes a #${id} product
  remove(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id: id },
    });
  }
}
