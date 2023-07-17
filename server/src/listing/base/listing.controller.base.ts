/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ListingService } from "../listing.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { ListingCreateInput } from "./ListingCreateInput";
import { ListingWhereInput } from "./ListingWhereInput";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingUpdateInput } from "./ListingUpdateInput";
import { Listing } from "./Listing";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ListingControllerBase {
  constructor(
    protected readonly service: ListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Listing })
  @swagger.ApiBody({
    type: ListingCreateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ListingCreateInput): Promise<Listing> {
    return await this.service.create({
      data: {
        ...data,

        category: {
          connect: data.category,
        },

        owner: {
          connect: data.owner,
        },
      },
      select: {
        category: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,
        description: true,
        id: true,
        location: true,

        owner: {
          select: {
            id: true,
          },
        },

        published: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Listing] })
  @ApiNestedQuery(ListingFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Listing[]> {
    const args = plainToClass(ListingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,
        description: true,
        id: true,
        location: true,

        owner: {
          select: {
            id: true,
          },
        },

        published: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,
        description: true,
        id: true,
        location: true,

        owner: {
          select: {
            id: true,
          },
        },

        published: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ListingUpdateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() data: ListingUpdateInput
  ): Promise<Listing | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          category: {
            connect: data.category,
          },

          owner: {
            connect: data.owner,
          },
        },
        select: {
          category: {
            select: {
              id: true,
            },
          },

          condition: true,
          createdAt: true,
          description: true,
          id: true,
          location: true,

          owner: {
            select: {
              id: true,
            },
          },

          published: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          condition: true,
          createdAt: true,
          description: true,
          id: true,
          location: true,

          owner: {
            select: {
              id: true,
            },
          },

          published: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
