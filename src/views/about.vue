<template>
  <div class="about">
    <div class="creative_consultancy">
      <h3 class="title">CREATIVE CONSULTANCY</h3>
      <div class="content">
        Studiopepe is a design agency founded in Milan, in 2006,
        by Arianna Lelli Mami and Chiara Di Pinto.
        Studiopepe’s focus is on design and research through
        the use of a multidisciplinary approach: this includes interior
        design (retail, hotels, private commissions), product design
        and creative consulting.
        The language they use for their designs is stratified
        and eclectic, uniting poetic vision and rigorous design.
        Art, installations, study of formal archetypes,
        experiments with materials and the dialogue between
        opposites are some of the themes developed by the Studio.
        Studiopepe’s projects are recognizable by their strong
        iconographic identity, based upon experimenting,
        continuous research on colours and materials and the
        contamination between the various contemporary languages
        with the intent to provide a solution that is uniquely special
        and respectful of each client’s individuality.
      </div>
    </div>
    <hr class="devideLine" />
    <div class="what_we_offer">
      <h3 class="title">WHAT WE OFFER</h3>
      <div class="content">
        <div>
          <span class="theme">
            Creative Consultancy,
          </span>
          <span class="detail">
            from visual identity to styling; 
          </span>
        </div>
        <div>
          <span class="theme">
            Retail Interior Design, 
          </span>
          <span class="detail">
            from window installations to shop interior design;  
          </span>
        </div>
        <div>
          <span class="theme">
            Exhibition Set-up,
          </span>
          <span class="detail">
             from concept to realization;
          </span>
        </div>
      </div>
    </div>
    <hr class="devideLine" />
    <div class="who_we_are">
      <h3 class="title">WHO WE ARE</h3>
      <div class="photo">
        <img src="https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/t/59aeb19a4c0dbfd7d6e4ebfc/1504620981972/-%C2%AE+Andrea+Ferrari+_DSC7210.jpg?format=750w" alt="">
      </div>
      <div class="person_desc">
        <div class="name">
          ARIANNA LELLI MAMI
        </div>
        <div class="desc">
          Arianna has graduated at Politecnico di Milano in Interior Design. She has always been fascinated by the ways people live and inhabit space, she looks at design from a viewpoint that is free from rigid schemes. Passionate about art, she collects objets trouvés that are then re-explored and utilized to create installations that often inspire projects for the agency. Recently, she has been working on a personal project that unites rediscovered photography with collage.
        </div>
      </div>
      <div class="person_desc">
        <div class="name">
          ARIANNA LELLI MAMI
        </div>
        <div class="desc">
          Arianna has graduated at Politecnico di Milano in Interior Design. She has always been fascinated by the ways people live and inhabit space, she looks at design from a viewpoint that is free from rigid schemes. Passionate about art, she collects objets trouvés that are then re-explored and utilized to create installations that often inspire projects for the agency. Recently, she has been working on a personal project that unites rediscovered photography with collage.
        </div>
      </div>
    </div>
    <div style="clear:both"></div>
    <hr class="devideLine" />
    <div class="clients">
      <h3 class="title">CLIENTS</h3>
      <div class="content">
        <div class="clients_item">Agape</div>
        <div class="clients_item">Co van der Horst</div>
        <div class="clients_item">Max&Co.</div>
        <div class="clients_item">Alessi</div>
        <div class="clients_item">Max&Co.</div>
        <div class="clients_item">Max&Co.</div>
        <div class="clients_item">Max&Co.</div>
        <div class="clients_item">Max&Co.</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style lang="scss" scoped>
.about{
  .devideLine{
    width: 70%;
    margin: 50px auto;
    color:rgba(0,0,0,.15); 
    border-style: none;
    border-width: 0;
    height: 1px;
    background-color: rgba(0,0,0,.15);
    min-width: 270px;
  }
}
.creative_consultancy, .what_we_offer{
  width: 42%;
  margin: 0 auto;
  .title{
    margin-top: 0;
  }
  .content{
    font-family: "adobe-caslon-pro";
    .theme{
      font-weight: bold;
    }
  }
}
.who_we_are{
  width: 70%;
  margin: 0 auto;
  .title{
    margin-top: 0;
    margin-bottom: 40px;
  }
  .photo{
    float: left;
    width: 30%;
    min-width: 278px;
    margin-right: 20px;
    img{
      width: 100%;
    }
  }
  .person_desc{
    .name{
      font-weight: 800;
      font-family: "adobe-caslon-pro";
      line-height: 2rem;
    }
    .desc{
      line-height: 1.4rem;
    }
    // float: right;
  }
  .person_desc:nth-last-child(1){
    .name{
      margin-top: 30px;
    }
  }
}
.clients{
    width: 65%;
    margin: 0 auto;
    .title{
      font-weight: bold;
      margin: 0 auto 40px;
    }
    .content{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .clients_item{
        width: 33.3%;
        text-align: center;
        padding: 10px 0;
      }
    }
    
  }
</style>
