<script setup lang="ts">
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'

const threeSceneRef = ref<HTMLDivElement | null>(null)
const loading = ref(true)

const createRoundedRectangleWithThickness = (width: number, height: number, radius: number, thickness: number = 0.02) => {
  const outerShape = new THREE.Shape()

  outerShape.moveTo(-width / 2 + radius, -height / 2)
  outerShape.lineTo(width / 2 - radius, -height / 2)
  outerShape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height /2 + radius)
  outerShape.lineTo(width / 2, height / 2 - radius)
  outerShape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2)
  outerShape.lineTo(-width / 2 + radius, height / 2)
  outerShape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius)
  outerShape.lineTo(-width / 2, -height / 2 + radius)
  outerShape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2)
  const extrudeSettings = {
    depth: thickness,
    bevelEnabled: false,
  }
  const geometry = new THREE.ExtrudeGeometry(outerShape, extrudeSettings)
  const uvs = geometry.attributes.uv.array
  for (let i = 0; i < uvs.length; i += 2) {
    uvs[i] = (uvs[i] + width / 2) / width
    uvs[i + 1] = (uvs[i + 1] + height / 2) / height
  }
  return geometry
}

const loadTextureWithPromise = (url: string) => {
  return new Promise<THREE.Texture>((resolve, reject) => {
    new THREE.TextureLoader().load(
      url,
      (texture) => {
        resolve(texture)
      },
      undefined,
      (error) => {
        reject(new Error(`Error loading texture: ${error}`))
      }
    )
  })
}

const loadImage = async (imgPath: string, scene: THREE.Scene, delta = 0) => {
  const texture = await loadTextureWithPromise(imgPath)
  const width = texture.image.width
  const height = texture.image.height
  const scale = 2.2
  const planeGeometry = createRoundedRectangleWithThickness(scale, height / width * scale, 0.2)
  const planeMaterial = new THREE.MeshBasicMaterial({ map: texture })
  //const plane = new THREE.Mesh(planeGeometry, [planeMaterial, new THREE.MeshBasicMaterial({ color: 0xED2B12 })])
  const plane = new THREE.Mesh(planeGeometry, [planeMaterial, new THREE.MeshBasicMaterial({ color: 0x000000 })])
  const angleInRadians = THREE.MathUtils.degToRad(5)
  
  plane.rotation.x = -angleInRadians
  plane.rotation.z = angleInRadians
  
  plane.position.z = Math.cos(Math.PI * 2 * delta) * 10
  plane.position.x = Math.sin(Math.PI * 2 * delta) * 20

  scene.add(plane)
  function animate(time: number) {
    requestAnimationFrame(animate)
    plane.position.z = Math.cos(Math.PI * 2 * (delta + time / 60000)) * 4
    plane.position.x = Math.sin(Math.PI * 2 * (delta + time / 60000)) * 9
    plane.position.y = Math.sin(Math.PI * 2 * (delta + time /5000)) * 0.4
  }
  animate(0)
}

onMounted(async () => {
  if (!threeSceneRef.value)
    return
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)
  threeSceneRef.value.appendChild(renderer.domElement)
  const imgPathList = [
    '/images/photo1.png',
    '/images/photo2.png',
    '/images/photo3.png',
    '/images/photo4.png',
    '/images/photo5.png',
    '/images/photo6.png',
    '/images/photo7.png',
    '/images/photo8.png',
    '/images/photo9.png',
    '/images/photo10.png',
    '/images/photo11.png',
    '/images/photo12.png'
  ]

  const n = 20
  for (let i = 0; i < n; i++)
    await loadImage(imgPathList[i % imgPathList.length], scene, i / n)
  camera.position.copy(new THREE.Vector3(-4, -1.25, 9))
  camera.rotation.y = 180

  const composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)
  const bokehPass = new BokehPass(scene, camera, {
    focus: 5.0,
    aperture: 0.001,
    maxblur: 0.01,
  })

  composer.addPass(bokehPass)

  function animate() {
    requestAnimationFrame(animate)
    camera.lookAt(scene.position)
    composer.render()
  }
  animate()

  loading.value = false
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight

    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    composer.setSize(window.innerWidth, window.innerHeight)
    bokehPass.setSize(window.innerWidth, window.innerHeight)
  }, false)
})
</script>

<template>
  <div
    ref="threeSceneRef"
    class="w-[100vw] h-[100dvh] absolute transition-all duration-1000"
    :class="{
      'opacity-0': loading,
      'opacity-100': !loading,
    }"
  />
</template>