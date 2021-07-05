/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-05-06 09:22:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-05 16:22:36
 * @Description: file content
 * @FilePath: /vue3_antd/src/components/ThreeViewer/testScene.ts
 */
// example Application
// examples a three.js Sketch for usage with vue3-three-component

// do not import * as Three bc this causes bundlers to bundle
// the whole library. use specific imports like this for proper
// tree shaking.
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Group
  // MeshBasicMaterial,
  // Mesh
} from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// the ThreeSketch Component calls the Scene function with
// its container dom Element as a parameter
// use this element the same way you would in a vanilla script.
const testScene = (containerElement: HTMLElement) => {
  // define vars
  let camera: any = null
  let scene: any = null
  let renderer: any = null

  // let cube: any = null

  const init = () => {
    // IMPORTANT: set renderer properties corresponding to the
    // containerElement parameter. In Three.js examples this is usually the
    // window object.
    camera = new PerspectiveCamera(
      45,
      containerElement.offsetWidth / containerElement.offsetHeight,
      1,
      100
    )

    camera.position.set(5, 5, 5)

    scene = new Scene()

    // renderer
    renderer = new WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(containerElement.offsetWidth, containerElement.offsetHeight)

    const lightGroup = new Group()
    scene.add(lightGroup)

    const ambientLight = new AmbientLight(0xffffff, 1)
    lightGroup.add(ambientLight)

    const directionLight = new DirectionalLight(0xffffff)
    lightGroup.add(directionLight)

    const axesHelper = new AxesHelper(10)
    scene.add(axesHelper)

    const arrowGroup = new Group()
    scene.add(arrowGroup)

    containerElement.appendChild(renderer.domElement)

    // objects
    // const geometry = new BoxGeometry()
    // const material = new MeshBasicMaterial({ color: 0x00ff00 })
    // cube = new Mesh(geometry, material)

    const loader = new FBXLoader()
    loader.load(
      '/3d/0001/0002.fbx',
      (gltf) => {
        scene.add(gltf)
      },
      (progress) => {
        console.log(progress)
      },
      (error) => {
        console.error(error)
      }
    )

    const controls = new OrbitControls(camera, renderer.domElement)
    scene.add(controls)
  }

  const animate = () => {
    requestAnimationFrame(animate)

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  // IMPORTANT: you need to expose the init and animate Funtions for the component to
  // call during its lifecycle
  return {
    init,
    animate
  }
}

// IMPORTANT: export default!
export default testScene
