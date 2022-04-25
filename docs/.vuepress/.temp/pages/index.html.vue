<template><h3 id="🚀-快速上手" tabindex="-1"><a class="header-anchor" href="#🚀-快速上手" aria-hidden="true">#</a> 🚀 快速上手</h3>
<p>首先，你应该在你现有的某一 VuePress 2 项目中安装 Mix 主题：</p>
<div class="language-bash ext-sh"><pre v-pre class="shiki" style="background-color: #22272e"><code><span class="line"><span style="color: #ADBAC7">yarn add -D vuepress-theme-mix@latest</span></span>
<span class="line"></span></code></pre></div><p>接着，在 <code>docs/.vuepress/config.ts</code> 文件中指定它:</p>
<div class="language-typescript ext-ts"><pre v-pre class="shiki" style="background-color: #22272e"><code><span class="line"><span style="color: #768390">// docs/.vuepress/config.ts</span></span>
<span class="line"><span style="color: #F47067">import</span><span style="color: #ADBAC7"> { defineUserConfig } </span><span style="color: #F47067">from</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&#39;vuepress&#39;</span></span>
<span class="line"><span style="color: #F47067">import</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">type</span><span style="color: #ADBAC7"> { MixThemeConfig } </span><span style="color: #F47067">from</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&#39;vuepress-theme-mix/lib/node&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #F69D50"> </span><span style="color: #F47067">default</span><span style="color: #F69D50"> </span><span style="color: #DCBDFB">defineUserConfig</span><span style="color: #F69D50">&lt;MixThemeConfig&gt;({</span></span>
<span class="line"><span style="color: #F69D50">  </span><span style="color: #768390">// ……</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F69D50">  </span><span style="color: #768390">// 指定使用主题</span></span>
<span class="line"><span style="color: #F69D50">  </span><span style="color: #ADBAC7">theme: </span><span style="color: #96D0FF">&#39;vuepress-theme-mix&#39;</span><span style="color: #F69D50">,</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F69D50">  </span><span style="color: #768390">// ……</span></span>
<span class="line"><span style="color: #F69D50">})</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div></div><p>最后，你就可以按照文档所述进行内容创作了。🍻</p>
</template>
