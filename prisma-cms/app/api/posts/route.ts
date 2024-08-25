import { type NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const category = searchParams.get('category')
  const search = searchParams.get('search') || ''
  const sort = searchParams.get('sort') || 'desc'

  const whereCondition = category
    ? {
        category,
        title: {
          contains: search,
          mode: 'insensitive',
        },
      }
    : {
        title: {
          contains: search,
          mode: 'insensitive',
        },
      }

  try {
    const posts = await prisma.post.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: sort,
      },
    })
    return Response.json(posts)
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}

export async function POST(req: Request) {
  try {
    const { title, content, category } = await req.json()
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        category,
      },
    })
    return Response.json(newPost)
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    })
  }
}