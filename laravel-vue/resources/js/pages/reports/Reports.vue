<template>
    <div class="content-header">
        <div class="container-fluid">
         <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Reports</h1>
                </div>
             
    </div>
        </div>
            </div>
            
            <div class="content-header">
        <div class="container-fluid">
         <div class="card">
            <div class="card-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#billing" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#payment" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="billing" role="tabpanel" aria-labelledby="home-tab">
    <div class="content"> 
    <div class="container-fluid"> 
      <div class="card"> 
            <div class="card-body">
              <!--form-->
    <form>
  <div class="form-row">
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Subscriber ID">
    </div>
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Name">
    </div>
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Quarter">
    </div>
    <div class="form-group col-md-3">
      <select id="Type" class="form-control">
        <option selected>Type</option>
        <option>Electric Bill</option>
        <option>Rental Bill</option>
        <option>Water Bill</option>
      </select>
    </div>
     <!--under form-->
     <div class="content">
     <div class="form-group row " >
    <label for="InputBillingAmount" class=" col-form-label mr-3">Billing Amount</label>
    <div class="col-sm-1">
      <input type="" class="form-control" id="" placeholder="min">
    </div>
    <div class="col-sm-1">
      <input type="" class="form-control" id="" placeholder="max">
    </div>

    <label for="InputDateRange" class="col-form-label mr-3">Date Range</label>
    <div class="col-sm-2">
      <input type="date" class="form-control" name="start" value="{{ $start }}" /> 
    </div>
    <div class="col-sm-2">
      <input type="date" class="form-control" name="end" value="{{ $end }}" />  
    </div>
    <button type="button" class="btn btn-secondary btn-sm mr-4">Search</button>
    <button type="button" class="btn btn-secondary btn-sm ">Generate Report</button>
  </div>
  </div>
</div>
  
</form>
            </div>
            </div>
    </div>
    </div>
    <div class="content"> 
    <div class="container-fluid"> 
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Type</th>
      <th scope="col">Subscriber ID</th>
      <th scope="col">Rank</th>
      <th scope="col">Fullname</th>
      <th scope="col">Address</th>
      <th scope="col">KwH| Cu| Rate</th>
      <th scope="col">Bill Amount</th>
      <th scope="col">Date From</th>
      <th scope="col">Date To</th>
    </tr>
  </thead>
  <tr>
                            <td>1</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>A</td>
                            <td>B</td>
                            <td>C</td>
                            <td>D</td>
                            <td>E</td>
                            <td>F</td>
                            <td>
                              <a href="#"><i class="fa fa-edit"></i>Edit</a>
                            </td>
                        </tr>
</table>

   </div>
</div>

  </div>
  <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="profile-tab">
    <div class="container-fluid"> 
      <div class="card"> 
            <div class="card-body">
              <!--form-->
    <form>
  <div class="form-row">
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Subscriber ID">
    </div>
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Name">
    </div>
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Quarter">
    </div>
    <div class="form-group col-md-3">
      <select id="Type" class="form-control">
        <option selected>Type</option>
        <option>Electric Bill</option>
        <option>Rental Bill</option>
        <option>Water Bill</option>
      </select>
    </div>
     <!--under form-->
     <div class="content">
     <div class="form-group row " >
    <label for="InputBillingAmount" class=" col-form-label mr-3">Billing Amount</label>
    <div class="col-sm-1">
      <input type="" class="form-control" id="" placeholder="min">
    </div>
    <div class="col-sm-1">
      <input type="" class="form-control" id="" placeholder="max">
    </div>

    <label for="InputDateRange" class="col-form-label mr-3">Date Range</label>
    <div class="col-sm-2">
      <input type="date" class="form-control" name="start" value="{{ $start }}" /> 
    </div>
    <div class="col-sm-2">
      <input type="date" class="form-control" name="end" value="{{ $end }}" />  
    </div>
    <button type="button" class="btn btn-secondary btn-sm mr-4">Search</button>
    <button type="button" class="btn btn-secondary btn-sm ">Generate Reportssss</button>
  </div>
  </div>
</div>
  
</form>
            </div>
            </div>
    </div>
    <div class="content"> 
    <div class="container-fluid"> 
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Type</th>
      <th scope="col">Subscriber ID</th>
      <th scope="col">Rank</th>
      <th scope="col">Fullname</th>
      <th scope="col">Address</th>
      <th scope="col">KwH| Cu| Rate</th>
      <th scope="col">Bill Amount</th>
      <th scope="col">Date From</th>
      <th scope="col">Date To</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
 
    </tr>
    <tr>
      <th scope="row">2</th>

    </tr>
    <tr>
      <th scope="row">3</th>
 
    </tr>
  </tbody>
</table>

   </div>
</div>

  </div>
</div>
</div>
             
    </div>
        </div>
            </div>


                 



<!--
<aside class="control-sidebar control-sidebar-dark">

<div class="p-3">
<h5>Title</h5>
<p>Sidebar content</p>
</div>
</aside>


<footer class="main-footer">

<div class="float-right d-none d-sm-inline">
Anything you want
</div>

<strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">NETBn</a>.</strong> All rights reserved.
</footer>
-->
</template>