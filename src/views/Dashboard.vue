<template>
  <div>
<!--    <WidgetsDropdown/>-->
<!--    <CCard>-->
<!--      <CCardBody>-->
<!--&lt;!&ndash;        <CRow>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol sm="5">&ndash;&gt;-->
<!--&lt;!&ndash;            <h4 id="traffic" class="card-title mb-0">Traffic</h4>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="small text-muted">November 2017</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol sm="7" class="d-none d-md-block">&ndash;&gt;-->
<!--&lt;!&ndash;            <CButton color="primary" class="float-right">&ndash;&gt;-->
<!--&lt;!&ndash;              <CIcon name="cil-cloud-download"/>&ndash;&gt;-->
<!--&lt;!&ndash;            </CButton>&ndash;&gt;-->
<!--&lt;!&ndash;            <CButtonGroup class="float-right mr-3">&ndash;&gt;-->
<!--&lt;!&ndash;              <CButton&ndash;&gt;-->
<!--&lt;!&ndash;                color="outline-secondary"&ndash;&gt;-->
<!--&lt;!&ndash;                v-for="(value, key) in ['Day', 'Month', 'Year']"&ndash;&gt;-->
<!--&lt;!&ndash;                :key="key"&ndash;&gt;-->
<!--&lt;!&ndash;                class="mx-0"&ndash;&gt;-->
<!--&lt;!&ndash;                :pressed="value === selected ? true : false"&ndash;&gt;-->
<!--&lt;!&ndash;                @click="selected = value"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                {{value}}&ndash;&gt;-->
<!--&lt;!&ndash;              </CButton>&ndash;&gt;-->
<!--&lt;!&ndash;            </CButtonGroup>&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;        </CRow>&ndash;&gt;-->
<!--        <MainChartExample style="height:300px;margin-top:40px;"/>-->
<!--      </CCardBody>-->
<!--      <CCardFooter>-->
<!--&lt;!&ndash;        <CRow class="text-center">&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol md sm="12" class="mb-sm-2 mb-0">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="text-muted">Visits</div>&ndash;&gt;-->
<!--&lt;!&ndash;            <strong>29.703 Users (40%)</strong>&ndash;&gt;-->
<!--&lt;!&ndash;            <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;              class="progress-xs mt-2"&ndash;&gt;-->
<!--&lt;!&ndash;              :precision="1"&ndash;&gt;-->
<!--&lt;!&ndash;              color="success"&ndash;&gt;-->
<!--&lt;!&ndash;              :value="40"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="text-muted">Unique</div>&ndash;&gt;-->
<!--&lt;!&ndash;            <strong>24.093 Users (20%)</strong>&ndash;&gt;-->
<!--&lt;!&ndash;            <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;              class="progress-xs mt-2"&ndash;&gt;-->
<!--&lt;!&ndash;              :precision="1"&ndash;&gt;-->
<!--&lt;!&ndash;              color="info"&ndash;&gt;-->
<!--&lt;!&ndash;              :value="20"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol md sm="12" class="mb-sm-2 mb-0">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="text-muted">Pageviews</div>&ndash;&gt;-->
<!--&lt;!&ndash;            <strong>78.706 Views (60%)</strong>&ndash;&gt;-->
<!--&lt;!&ndash;            <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;              class="progress-xs mt-2"&ndash;&gt;-->
<!--&lt;!&ndash;              :precision="1"&ndash;&gt;-->
<!--&lt;!&ndash;              color="warning"&ndash;&gt;-->
<!--&lt;!&ndash;              :value="60"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol md sm="12" class="mb-sm-2 mb-0">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="text-muted">New Users</div>&ndash;&gt;-->
<!--&lt;!&ndash;            <strong>22.123 Users (80%)</strong>&ndash;&gt;-->
<!--&lt;!&ndash;            <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;              class="progress-xs mt-2"&ndash;&gt;-->
<!--&lt;!&ndash;              :precision="1"&ndash;&gt;-->
<!--&lt;!&ndash;              color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;              :value="80"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="text-muted">Bounce Rate</div>&ndash;&gt;-->
<!--&lt;!&ndash;            <strong>Average Rate (40.15%)</strong>&ndash;&gt;-->
<!--&lt;!&ndash;            <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;              class="progress-xs mt-2"&ndash;&gt;-->
<!--&lt;!&ndash;              :precision="1"&ndash;&gt;-->
<!--&lt;!&ndash;              :value="40"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;          </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;        </CRow>&ndash;&gt;-->
<!--      </CCardFooter>-->
<!--    </CCard>-->
<!--    <WidgetsBrand/>-->
<!--    <CRow>-->
<!--      <CCol md="12">-->
<!--&lt;!&ndash;        <CCard>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCardHeader>&ndash;&gt;-->
<!--&lt;!&ndash;            Traffic &amp; Sales&ndash;&gt;-->
<!--&lt;!&ndash;          </CCardHeader>&ndash;&gt;-->
<!--&lt;!&ndash;          <CCardBody>&ndash;&gt;-->
<!--&lt;!&ndash;            <CRow>&ndash;&gt;-->
<!--&lt;!&ndash;              <CCol sm="12" lg="6">&ndash;&gt;-->
<!--&lt;!&ndash;                <CRow>&ndash;&gt;-->
<!--&lt;!&ndash;                  <CCol sm="6">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CCallout color="info">&ndash;&gt;-->
<!--&lt;!&ndash;                      <small class="text-muted">New Clients</small><br>&ndash;&gt;-->
<!--&lt;!&ndash;                      <strong class="h4">9,123</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                    </CCallout>&ndash;&gt;-->
<!--&lt;!&ndash;                  </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;                  <CCol sm="6">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CCallout color="danger">&ndash;&gt;-->
<!--&lt;!&ndash;                      <small class="text-muted">Recurring Clients</small><br>&ndash;&gt;-->
<!--&lt;!&ndash;                      <strong class="h4">22,643</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                    </CCallout>&ndash;&gt;-->
<!--&lt;!&ndash;                  </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;                </CRow>&ndash;&gt;-->
<!--&lt;!&ndash;                <hr class="mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Monday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="34"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="78"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Tuesday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="56"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="94"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Wednesday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="12"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="67"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Thursday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="43"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="91"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Friday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="22"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="73"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Saturday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="53"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="82"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="progress-group mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-prepend">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="progress-group-text">&ndash;&gt;-->
<!--&lt;!&ndash;                      Sunday&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="9"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="info"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                    <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                      class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                      :value="69"&ndash;&gt;-->
<!--&lt;!&ndash;                      color="danger"&ndash;&gt;-->
<!--&lt;!&ndash;                    />&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="legend text-center">&ndash;&gt;-->
<!--&lt;!&ndash;                  <small>&ndash;&gt;-->
<!--&lt;!&ndash;                    <sup><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>&ndash;&gt;-->
<!--&lt;!&ndash;                    New clients&ndash;&gt;-->
<!--&lt;!&ndash;                    &nbsp;&nbsp;&ndash;&gt;-->
<!--&lt;!&ndash;                    <sup><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>&ndash;&gt;-->
<!--&lt;!&ndash;                    Recurring clients&ndash;&gt;-->
<!--&lt;!&ndash;                  </small>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;              <CCol sm="12" lg="6">&ndash;&gt;-->
<!--&lt;!&ndash;                <CRow>&ndash;&gt;-->
<!--&lt;!&ndash;                  <CCol sm="6">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CCallout color="warning">&ndash;&gt;-->
<!--&lt;!&ndash;                      <small class="text-muted">Pageviews</small><br>&ndash;&gt;-->
<!--&lt;!&ndash;                      <strong class="h4">78,623</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                    </CCallout>&ndash;&gt;-->
<!--&lt;!&ndash;                  </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;                  <CCol sm="6">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CCallout color="success">&ndash;&gt;-->
<!--&lt;!&ndash;                      <small class="text-muted">Organic</small><br>&ndash;&gt;-->
<!--&lt;!&ndash;                      <strong class="h4">49,123</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                    </CCallout>&ndash;&gt;-->
<!--&lt;!&ndash;                  </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;                </CRow>&ndash;&gt;-->
<!--&lt;!&ndash;                <hr class="mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                <ul class="horizontal-bars type-2">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-header">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon name="cil-user" class="progress-group-icon"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="title">Male</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="ml-auto font-weight-bold">43%</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                        :value="43"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="warning"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group mb-5">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-header">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon name="cil-user-female" class="progress-group-icon"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="title">Female</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="ml-auto font-weight-bold">37%</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                        :value="37"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="warning"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-header">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon name="cil-globe-alt" class="progress-group-icon"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="title">Organic Search</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="ml-auto font-weight-bold">&ndash;&gt;-->
<!--&lt;!&ndash;                        191,235 <span class="text-muted small">(56%)</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      </span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                        :value="56"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="success"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-header">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon&ndash;&gt;-->
<!--&lt;!&ndash;                        name="cib-facebook"&ndash;&gt;-->
<!--&lt;!&ndash;                        height="17"&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-group-icon"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="title">Facebook</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="ml-auto font-weight-bold">&ndash;&gt;-->
<!--&lt;!&ndash;                        51,223 <span class="text-muted small">(15%)</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      </span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                        :value="15"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="success"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-header">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon&ndash;&gt;-->
<!--&lt;!&ndash;                        name="cib-twitter"&ndash;&gt;-->
<!--&lt;!&ndash;                        height="17"&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-group-icon"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="title">Twitter</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="ml-auto font-weight-bold">&ndash;&gt;-->
<!--&lt;!&ndash;                        37,564 <span class="text-muted small">(11%)</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      </span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                        :value="11"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="success"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="progress-group">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-header">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon&ndash;&gt;-->
<!--&lt;!&ndash;                        name="cib-linkedin"&ndash;&gt;-->
<!--&lt;!&ndash;                        height="17"&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-group-icon"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="title">LinkedIn</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="ml-auto font-weight-bold">&ndash;&gt;-->
<!--&lt;!&ndash;                        27,319 <span class="text-muted small">&nbsp;(8%)</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      </span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="progress-group-bars">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                        class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                        :value="8"&ndash;&gt;-->
<!--&lt;!&ndash;                        color="success"&ndash;&gt;-->
<!--&lt;!&ndash;                      />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="divider text-center">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CButton color="link" size="sm" class="text-muted">&ndash;&gt;-->
<!--&lt;!&ndash;                      <CIcon name="cil-options"/>&ndash;&gt;-->
<!--&lt;!&ndash;                    </CButton>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </ul>&ndash;&gt;-->
<!--&lt;!&ndash;              </CCol>&ndash;&gt;-->
<!--&lt;!&ndash;            </CRow>&ndash;&gt;-->
<!--&lt;!&ndash;            <br/>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDataTable&ndash;&gt;-->
<!--&lt;!&ndash;              class="mb-0 table-outline"&ndash;&gt;-->
<!--&lt;!&ndash;              hover&ndash;&gt;-->
<!--&lt;!&ndash;              :items="tableItems"&ndash;&gt;-->
<!--&lt;!&ndash;              :fields="tableFields"&ndash;&gt;-->
<!--&lt;!&ndash;              head-color="light"&ndash;&gt;-->
<!--&lt;!&ndash;              no-sorting&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;              <td slot="avatar" class="text-center" slot-scope="{item}">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="c-avatar">&ndash;&gt;-->
<!--&lt;!&ndash;                  <img :src="item.avatar.url" class="c-avatar-img" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                  <span&ndash;&gt;-->
<!--&lt;!&ndash;                    class="c-avatar-status"&ndash;&gt;-->
<!--&lt;!&ndash;                    :class="`bg-${item.avatar.status || 'secondary'}`"&ndash;&gt;-->
<!--&lt;!&ndash;                  ></span>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </td>&ndash;&gt;-->
<!--&lt;!&ndash;              <td slot="user" slot-scope="{item}">&ndash;&gt;-->
<!--&lt;!&ndash;                <div>{{item.user.name}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="small text-muted">&ndash;&gt;-->
<!--&lt;!&ndash;                  <span>&ndash;&gt;-->
<!--&lt;!&ndash;                    <template v-if="item.user.new">New</template>&ndash;&gt;-->
<!--&lt;!&ndash;                    <template v-else>Recurring</template>&ndash;&gt;-->
<!--&lt;!&ndash;                  </span> | Registered: {{item.user.registered}}&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </td>&ndash;&gt;-->
<!--&lt;!&ndash;              <td&ndash;&gt;-->
<!--&lt;!&ndash;                slot="country"&ndash;&gt;-->
<!--&lt;!&ndash;                slot-scope="{item}"&ndash;&gt;-->
<!--&lt;!&ndash;                class="text-center"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                <CIcon&ndash;&gt;-->
<!--&lt;!&ndash;                  :name="item.country.flag"&ndash;&gt;-->
<!--&lt;!&ndash;                  height="25"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;              </td>&ndash;&gt;-->
<!--&lt;!&ndash;              <td slot="usage" slot-scope="{item}">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="float-left">&ndash;&gt;-->
<!--&lt;!&ndash;                    <strong>{{item.usage.value}}%</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="float-right">&ndash;&gt;-->
<!--&lt;!&ndash;                    <small class="text-muted">{{item.usage.period}}</small>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <CProgress&ndash;&gt;-->
<!--&lt;!&ndash;                  class="progress-xs"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-model="item.usage.value"&ndash;&gt;-->
<!--&lt;!&ndash;                  :color="color(item.usage.value)"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;              </td>&ndash;&gt;-->
<!--&lt;!&ndash;              <td&ndash;&gt;-->
<!--&lt;!&ndash;                slot="payment"&ndash;&gt;-->
<!--&lt;!&ndash;                slot-scope="{item}"&ndash;&gt;-->
<!--&lt;!&ndash;                class="text-center"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                <CIcon&ndash;&gt;-->
<!--&lt;!&ndash;                  :name="item.payment.icon"&ndash;&gt;-->
<!--&lt;!&ndash;                  height="25"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;              </td>&ndash;&gt;-->
<!--&lt;!&ndash;              <td slot="activity" slot-scope="{item}">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="small text-muted">Last login</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <strong>{{item.activity}}</strong>&ndash;&gt;-->
<!--&lt;!&ndash;              </td>&ndash;&gt;-->
<!--&lt;!&ndash;            </CDataTable>&ndash;&gt;-->
<!--&lt;!&ndash;          </CCardBody>&ndash;&gt;-->
<!--&lt;!&ndash;        </CCard>&ndash;&gt;-->
<!--      </CCol>-->
<!--    </CRow>-->

  <div id="embeddingContainer"></div>
  </div>
</template>

<script src="https://unpkg.com/amazon-quicksight-embedding-sdk@1.0.17/dist/quicksight-embedding-js-sdk.min.js"></script>
<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import axios from "axios";
import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";
var dashboard;

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
    }
  },
  created () {           // 초기화 함수를 정의 한다.
    var containerDiv = document.getElementById("embeddingContainer");
    console.log(containerDiv)
    var options = {
        // replace this dummy url with the one generated via embedding API
        url: "https://us-east-1.quicksight.aws.amazon.com/embed/da73a158d08e4a9b9a53ae4b386c6a37/dashboards/c0c0fd21-cb06-4009-b941-58920779d31d?code=AYABeN5_U17kvV8EkUom3C83eFIAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4ZGLViwIvMWeq0eg2SdOyWJS86qkEBfgLEiY79AhlHtMBYF5XB6KPCDV7SVubXsekqQAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDMh687bmAXcQJ1tw2QIBEIA7LP2DMTR4CPKPp6uFa36MgOTw3tNvsMtHtGJonhHF5JBItsIpOqlyo8MvzXVHzR59vtxTWZB5ax5VVyUCAAAAAAwAABAAAAAAAAAAAAAAAAAAcRll7TfTSc8mOZGV6IvF-v____8AAAABAAAAAAAAAAAAAAABAAAAm3OlzIB9NiyxWbKctx7zizZqCXHj5PX4Dras9QKSV9uIPmWdKrc8iodGoGjKNEjHUyspX8vkKoo-cN5u1ramvztA9VplAyBYor2BrUEbXvV5t6jQukX_IBMfkIyKCnsNVgbuf8SlTC9J_qoimZx883yps8T4v1mzPEF8vYws95zYxz4fmz-EBvwEgmjjkzsuGXP-xO7Ojtb001v2zWOkC4vICY0YmoMh70wBoA%3D%3D&identityprovider=quicksight&isauthcode=true",
        container: containerDiv,
        scrolling: "no",
        height: "700px",
        width: "1000px",
        footerPaddingEnabled: true
    };
    dashboard = QuickSightEmbedding.embedDashboard(options);
    console.log(dashboard)
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
