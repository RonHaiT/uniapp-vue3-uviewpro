<script setup>
import MyTabbar from '@/components/tabbar/index.vue'
</script>

<template>
  <view class="post-page">
    <!-- <Navbar /> -->
    <view class="decoration-top">
      <view class="circle circle-1" />
      <view class="circle circle-2" />
      <view class="circle circle-3" />
      <view class="welcome-text">
        <view class="welcome-title">
          需要什么服务？
        </view>
        <view class="welcome-subtitle">
          足不出户、一触即达！
        </view>
      </view>
    </view>

    <view class="box">
      <view class="service-item">
        <view class="service-item-icon">
          <image src="/static/service/express-pickup.png" mode="scaleToFill" />
        </view>
        <view class="service-item-content">
          <view class="service-item-title">
            快递代取
          </view>
          <view class="service-item-description">
            哎哟喂，帮忙帮忙取一下快递啦~
          </view>
        </view>
      </view>
    </view>
  </view>
  <MyTabbar :current="1" />
</template>
