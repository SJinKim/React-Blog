import React from 'react'
import { useRouter } from 'next/router'

import { getCategories, getCategoryPost } from '../../services'
import { PostCard, Categories, Loader } from '../../components'
